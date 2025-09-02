import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const Processes = () => {
  const processes = [
    {
      id: 1,
      name: "Customer Onboarding",
      description: "Complete workflow for new customer registration and setup",
      status: "active",
      steps: 8,
      avgTime: "2-3 days",
      owner: "Sales Team",
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      name: "Quality Assurance",
      description: "Product testing and quality control procedures",
      status: "review",
      steps: 12,
      avgTime: "4-6 hours",
      owner: "QA Team",
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      name: "Incident Response",
      description: "Emergency response and resolution procedures",
      status: "active",
      steps: 6,
      avgTime: "1-2 hours",
      owner: "IT Operations",
      lastUpdated: "3 days ago"
    },
    {
      id: 4,
      name: "Employee Training",
      description: "New hire onboarding and continuing education process",
      status: "draft",
      steps: 15,
      avgTime: "2 weeks",
      owner: "HR Department",
      lastUpdated: "5 days ago"
    },
    {
      id: 5,
      name: "Budget Approval",
      description: "Financial planning and budget approval workflow",
      status: "active",
      steps: 10,
      avgTime: "1-2 weeks",
      owner: "Finance Team",
      lastUpdated: "1 day ago"
    },
    {
      id: 6,
      name: "Equipment Maintenance",
      description: "Scheduled maintenance and repair procedures",
      status: "review",
      steps: 9,
      avgTime: "3-4 hours",
      owner: "Facilities Team",
      lastUpdated: "4 days ago"
    }
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case "active": return "improve";
      case "review": return "maintain";
      case "draft": return "todo";
      default: return "default";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active": return "CheckCircle";
      case "review": return "AlertCircle";
      case "draft": return "Clock";
      default: return "Circle";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Process Management
          </h1>
          <p className="text-slate-600">
            Define, optimize, and monitor your business processes and workflows
          </p>
        </div>
        <Button className="shadow-lg">
          <ApperIcon name="Plus" className="h-4 w-4 mr-2" />
          Create Process
        </Button>
      </div>

      {/* Process Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="CheckCircle" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-green-700">4</p>
            <p className="text-sm text-green-600">Active Processes</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="AlertCircle" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-yellow-700">2</p>
            <p className="text-sm text-yellow-600">Under Review</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="Clock" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-700">1</p>
            <p className="text-sm text-gray-600">Draft Processes</p>
          </CardContent>
        </Card>
      </div>

      {/* Processes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {processes.map((process) => (
          <Card key={process.id} className="hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{process.name}</CardTitle>
                  <p className="text-sm text-slate-600 mb-3">{process.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant={getStatusVariant(process.status)}>
                      <ApperIcon name={getStatusIcon(process.status)} className="h-3 w-3 mr-1" />
                      {process.status.charAt(0).toUpperCase() + process.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-1 ml-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-blue-50 hover:text-blue-600">
                    <ApperIcon name="Edit2" className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-50">
                    <ApperIcon name="MoreVertical" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Steps:</span>
                    <span className="ml-2 font-medium">{process.steps}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Avg Time:</span>
                    <span className="ml-2 font-medium">{process.avgTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <ApperIcon name="User" className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-600">{process.owner}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <ApperIcon name="Clock" className="h-3 w-3" />
                    <span className="text-xs">{process.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Process Analytics */}
      <Card className="shadow-xl bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-1">
                Process Optimization Opportunities
              </h3>
              <p className="text-primary-600">
                Identify bottlenecks and improve workflow efficiency across your organization.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="shadow-lg whitespace-nowrap">
                <ApperIcon name="TrendingUp" className="h-4 w-4 mr-2" />
                Analyze Performance
              </Button>
              <Button className="shadow-lg whitespace-nowrap">
                <ApperIcon name="GitBranch" className="h-4 w-4 mr-2" />
                Process Builder
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Processes;