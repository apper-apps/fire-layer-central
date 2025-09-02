import ApperIcon from "@/components/ApperIcon";

const Loading = ({ message = "Loading...", className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
      <div className="relative">
        <div className="w-12 h-12 border-4 border-slate-200 rounded-full animate-pulse" />
        <div className="absolute inset-0 w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
      <p className="mt-4 text-slate-600 font-medium">{message}</p>
      <div className="mt-2 flex gap-1">
        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
};

export default Loading;