import React from "react";
import { cn } from "@/utils/cn";

const Badge = React.forwardRef(({ 
  className, 
  variant = "default", 
  clickable = false,
  onClick,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2";
const variants = {
    default: "bg-slate-100 text-slate-800 border border-slate-200",
    todo: "bg-gray-100 text-gray-800 border border-gray-200",
    progress: "bg-blue-100 text-blue-800 border border-blue-200", 
    done: "bg-green-100 text-green-800 border border-green-200",
    react: "bg-red-100 text-red-800 border border-red-200",
    maintain: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    improve: "bg-green-100 text-green-800 border border-green-200"
  };

  const clickableVariants = {
    default: "hover:bg-slate-200 cursor-pointer",
    todo: "hover:bg-gray-200 cursor-pointer",
    progress: "hover:bg-blue-200 cursor-pointer",
    done: "hover:bg-green-200 cursor-pointer", 
    react: "hover:bg-red-200 cursor-pointer",
    maintain: "hover:bg-yellow-200 cursor-pointer",
    improve: "hover:bg-green-200 cursor-pointer"
  };

  return (
<div
      className={cn(
        baseStyles, 
        variants[variant], 
        clickable && clickableVariants[variant],
        className
      )}
      ref={ref}
      onClick={clickable ? onClick : undefined}
      {...props}
    />
  );
});

Badge.displayName = "Badge";

export default Badge;