import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Header = ({ onMenuToggle, isMobileMenuOpen }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden mr-2"
          onClick={onMenuToggle}
        >
          <ApperIcon 
            name={isMobileMenuOpen ? "X" : "Menu"} 
            className="h-6 w-6" 
          />
        </Button>

        {/* Logo and title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
            <ApperIcon name="Zap" className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              OPS Hub
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block">Business Operations Management</p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-slate-100">
            <ApperIcon name="Bell" className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-slate-100">
            <ApperIcon name="Settings" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;