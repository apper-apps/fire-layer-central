import { format } from "date-fns";
import ApperIcon from "@/components/ApperIcon";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import { Card, CardContent, CardHeader } from "@/components/atoms/Card";

const TaskCard = ({ task, onEdit, onDelete, onStatusChange }) => {
  const cycleStatus = (currentStatus) => {
    const statusCycle = ["To Do", "In Progress", "Done"];
    const currentIndex = statusCycle.indexOf(currentStatus);
    const nextIndex = (currentIndex + 1) % statusCycle.length;
    return statusCycle[nextIndex];
  };

  const handleStatusClick = () => {
    const newStatus = cycleStatus(task.status_c);
    onStatusChange(task.Id, newStatus);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      onStatusChange(task.Id, "Done");
    }
  };
  const getTaskTypeColor = (type) => {
    switch (type) {
      case "React": return "react";
      case "Maintain": return "maintain";
      case "Improve": return "improve";
      default: return "default";
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case "To Do": return "todo";
      case "In Progress": return "progress";
      case "Done": return "done";
      default: return "default";
    }
  };

  const getDueDateColor = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "text-red-600";
    if (diffDays <= 3) return "text-orange-600";
    return "text-slate-600";
  };

const isCompleted = task.status_c === "Done";
  
  return (
    <Card className={`hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${isCompleted ? 'opacity-75' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
<div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={handleCheckboxChange}
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <div className="flex-1">
              <h3 className={`font-semibold mb-2 ${isCompleted ? 'line-through text-slate-500' : 'text-slate-800'}`}>
                {task.title_c}
              </h3>
            <div className="flex items-center gap-2">
              <Badge variant={getTaskTypeColor(task.task_type_c)}>
                {task.task_type_c}
              </Badge>
<Badge 
                variant={getStatusVariant(task.status_c)} 
                clickable
                onClick={handleStatusClick}
              >
                {task.status_c}
              </Badge>
            </div>
          </div>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onEdit(task)}
              className="h-8 w-8 hover:bg-blue-50 hover:text-blue-600"
            >
              <ApperIcon name="Edit2" className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(task)}
              className="h-8 w-8 hover:bg-red-50 hover:text-red-600"
            >
              <ApperIcon name="Trash2" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
<CardContent className="pt-0">
        <p className={`text-sm mb-4 line-clamp-2 ${isCompleted ? 'line-through text-slate-400' : 'text-slate-600'}`}>
          {task.description_c}
        </p>
        <div className="space-y-2">
<div className={`flex items-center text-sm ${isCompleted ? 'text-slate-400' : 'text-slate-600'}`}>
            <ApperIcon name="User" className="h-4 w-4 mr-2" />
            <span>{task.assignee_c}</span>
          </div>
          
<div className={`flex items-center text-sm ${isCompleted ? 'text-slate-400' : getDueDateColor(task.due_date_c)}`}>
            <ApperIcon name="Calendar" className="h-4 w-4 mr-2" />
            <span>Due {format(new Date(task.due_date_c), "MMM dd, yyyy")}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;