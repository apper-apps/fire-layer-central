import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const NavigationItem = ({ item, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = location.pathname === item.path || (hasChildren && item.children.some(child => location.pathname === child.path));

  const handleClick = (e) => {
    if (hasChildren && item.path === "#") {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const baseClasses = "flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group";
  const activeClasses = "bg-gradient-to-r from-primary-500/10 to-primary-600/10 text-primary-600 border-r-2 border-primary-500";
  const inactiveClasses = "text-slate-300 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 hover:text-white";

  const content = (
    <div
      className={cn(
        baseClasses,
        isActive ? activeClasses : inactiveClasses,
        level > 0 && "ml-4"
      )}
      onClick={handleClick}
    >
      <ApperIcon 
        name={item.icon} 
        className={cn(
          "h-5 w-5 mr-3 transition-colors",
          isActive ? "text-primary-600" : "text-slate-400 group-hover:text-white"
        )} 
      />
      <span className="flex-1">{item.label}</span>
      {hasChildren && (
        <ApperIcon
          name="ChevronRight"
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isExpanded && "transform rotate-90",
            isActive ? "text-primary-600" : "text-slate-400 group-hover:text-white"
          )}
        />
      )}
    </div>
  );

  return (
    <div>
      {item.path === "#" ? (
        <button className="w-full text-left">
          {content}
        </button>
      ) : (
        <NavLink to={item.path} className="block">
          {content}
        </NavLink>
      )}
      
      {hasChildren && isExpanded && (
        <div className="mt-1 space-y-1">
          {item.children.map((child) => (
            <NavigationItem 
              key={child.Id} 
              item={child} 
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationItem;