import Button from "@/components/atoms/Button";
import { cn } from "@/utils/cn";

const FilterBar = ({ activeFilter, onFilterChange, className }) => {
  const filters = [
    { key: "all", label: "All Tasks", color: "bg-slate-500" },
    { key: "React", label: "React", color: "bg-react" },
    { key: "Maintain", label: "Maintain", color: "bg-maintain" },
    { key: "Improve", label: "Improve", color: "bg-improve" }
  ];

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {filters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilter === filter.key ? "default" : "secondary"}
          size="sm"
          onClick={() => onFilterChange(filter.key)}
          className={cn(
            "relative overflow-hidden",
            activeFilter === filter.key && "shadow-lg"
          )}
        >
          <div className={cn("absolute left-0 top-0 bottom-0 w-1", filter.color)} />
          <span className="ml-1">{filter.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default FilterBar;