import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import tasksService from "@/services/api/tasksService";
import ApperIcon from "@/components/ApperIcon";
import TaskList from "@/components/organisms/TaskList";
import TaskModal from "@/components/organisms/TaskModal";
import FilterBar from "@/components/molecules/FilterBar";
import SearchBar from "@/components/molecules/SearchBar";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Loading from "@/components/ui/Loading";
import Button from "@/components/atoms/Button";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    // Check for filter parameter in URL
    const filterParam = searchParams.get("filter");
    if (filterParam && ["React", "Maintain", "Improve"].includes(filterParam)) {
      setActiveFilter(filterParam);
    }
    
    loadTasks();
  }, [searchParams]);

  useEffect(() => {
    applyFiltersAndSearch();
  }, [tasks, activeFilter, searchTerm]);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError("");
      const tasksData = await tasksService.getAll();
      setTasks(tasksData);
    } catch (error) {
      setError("Failed to load tasks. Please try again.");
    } finally {
      setLoading(false);
    }
};

  const handleCreateTask = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleSaveTask = async (formData) => {
    if (editingTask) {
      await tasksService.update(editingTask.Id, formData);
    } else {
      await tasksService.create(formData);
    }
    await loadTasks(); // Refresh the task list
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

const applyFiltersAndSearch = () => {
    let filtered = [...tasks];
    // Apply type filter
if (activeFilter !== "all") {
filtered = filtered.filter(task => task.task_type_c === activeFilter);
}

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(task =>
        task.title_c?.toLowerCase().includes(searchLower) ||
        task.description_c?.toLowerCase().includes(searchLower) ||
        task.assignee_c?.toLowerCase().includes(searchLower)
      );
    }

    setFilteredTasks(filtered);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    // Update URL params
    if (filter === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ filter });
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  if (loading) return <Loading message="Loading tasks..." />;
  if (error) return <Error message={error} onRetry={loadTasks} />;

return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Task Management
          </h1>
          <p className="text-slate-600">
            Organize and track your operational tasks by priority and status
          </p>
        </div>
        <Button onClick={handleCreateTask} className="shadow-lg">
          <ApperIcon name="Plus" className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <FilterBar 
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
        
        <div className="w-full sm:w-64">
          <SearchBar
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Task List */}
{tasks.length === 0 ? (
        <Empty
          title="No tasks yet"
          description="Create your first task to start managing your business operations effectively."
          actionLabel="Create Task"
          onAction={handleCreateTask}
          icon="CheckSquare"
        />
      ) : filteredTasks.length === 0 ? (
        <Empty
          title="No tasks match your criteria"
          description={
            searchTerm 
              ? `No tasks found for "${searchTerm}". Try adjusting your search or filter.`
              : `No ${activeFilter.toLowerCase()} tasks found. Try selecting a different filter.`
          }
          actionLabel="Clear Filters"
          icon="Search"
          onAction={() => {
            setSearchTerm("");
            setActiveFilter("all");
            setSearchParams({});
          }}
        />
      ) : (
<TaskList
          tasks={filteredTasks}
          onTasksChange={loadTasks}
          loading={false}
          isModalOpen={isModalOpen}
          onModalOpen={setIsModalOpen}
          onModalClose={handleCloseModal}
          editingTask={editingTask}
          onEditingTaskChange={setEditingTask}
        />
)}

      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        task={editingTask}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default Tasks;