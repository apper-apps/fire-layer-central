import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Systems = () => {
  const systemCategories = [
    {
      id: 1,
      title: "IT Infrastructure",
      description: "Servers, networks, and core technology systems",
      icon: "Server",
      color: "from-blue-500 to-blue-600",
      items: ["Production Servers", "Network Infrastructure", "Database Systems", "Cloud Services"]
    },
    {
      id: 2,
      title: "Security Systems",
      description: "Access control, monitoring, and protection systems",
      icon: "Shield",
      color: "from-red-500 to-red-600",
      items: ["Access Control", "CCTV Monitoring", "Firewall Systems", "Backup Solutions"]
    },
    {
      id: 3,
      title: "Communication",
      description: "Phone systems, messaging, and collaboration tools",
      icon: "Phone",
      color: "from-green-500 to-green-600",
      items: ["Phone System", "Video Conferencing", "Team Chat", "Email Infrastructure"]
    },
    {
      id: 4,
      title: "Facility Management",
      description: "HVAC, lighting, and building automation systems",
      icon: "Building",
      color: "from-purple-500 to-purple-600",
      items: ["HVAC Control", "Lighting Systems", "Building Access", "Environmental Monitoring"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Systems Management
          </h1>
          <p className="text-slate-600">
            Monitor and manage your critical business systems and infrastructure
          </p>
        </div>
        <Button className="shadow-lg">
          <ApperIcon name="Plus" className="h-4 w-4 mr-2" />
          Add System
        </Button>
      </div>

      {/* Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {systemCategories.map((category) => (
          <Card key={category.id} className="hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                  <ApperIcon name={category.icon} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <p className="text-sm text-slate-600 mt-1">{category.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:from-slate-100 hover:to-slate-200 transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-slate-600">Systems Operational</span>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                    <ApperIcon name="Settings" className="h-4 w-4 mr-1" />
                    Configure
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="shadow-xl bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-1">
                System Health Overview
              </h3>
              <p className="text-primary-600">
                All critical systems are running normally. Last check: 2 minutes ago
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="shadow-lg whitespace-nowrap">
                <ApperIcon name="RefreshCw" className="h-4 w-4 mr-2" />
                Refresh Status
              </Button>
              <Button className="shadow-lg whitespace-nowrap">
                <ApperIcon name="BarChart3" className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Systems;