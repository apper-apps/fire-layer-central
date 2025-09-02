import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const Reports = () => {
  const reportCategories = [
    {
      id: 1,
      category: "Operations Reports",
      description: "Task completion, efficiency metrics, and operational KPIs",
      reports: [
        { name: "Task Performance Dashboard", type: "interactive", lastGenerated: "2024-01-10", schedule: "Daily" },
        { name: "Department Efficiency Report", type: "pdf", lastGenerated: "2024-01-09", schedule: "Weekly" },
        { name: "Resource Utilization Analysis", type: "excel", lastGenerated: "2024-01-08", schedule: "Monthly" },
        { name: "Operational Metrics Summary", type: "interactive", lastGenerated: "2024-01-10", schedule: "Daily" }
      ]
    },
    {
      id: 2,
      category: "System Performance",
      description: "Infrastructure health, uptime, and technical metrics",
      reports: [
        { name: "System Uptime Report", type: "pdf", lastGenerated: "2024-01-10", schedule: "Weekly" },
        { name: "Performance Monitoring Dashboard", type: "interactive", lastGenerated: "2024-01-10", schedule: "Real-time" },
        { name: "Security Incident Log", type: "excel", lastGenerated: "2024-01-09", schedule: "Weekly" },
        { name: "Infrastructure Health Check", type: "pdf", lastGenerated: "2024-01-08", schedule: "Monthly" }
      ]
    },
    {
      id: 3,
      category: "Team & HR Analytics",
      description: "Team performance, training, and human resource insights",
      reports: [
        { name: "Team Performance Review", type: "pdf", lastGenerated: "2024-01-07", schedule: "Monthly" },
        { name: "Training Completion Tracker", type: "excel", lastGenerated: "2024-01-09", schedule: "Weekly" },
        { name: "Employee Productivity Analysis", type: "interactive", lastGenerated: "2024-01-10", schedule: "Daily" },
        { name: "Skills Assessment Report", type: "pdf", lastGenerated: "2024-01-05", schedule: "Quarterly" }
      ]
    },
    {
      id: 4,
      category: "Financial & Budget",
      description: "Cost analysis, budget tracking, and financial performance",
      reports: [
        { name: "Operational Cost Analysis", type: "excel", lastGenerated: "2024-01-08", schedule: "Monthly" },
        { name: "Budget vs Actual Report", type: "pdf", lastGenerated: "2024-01-07", schedule: "Monthly" },
        { name: "ROI Analysis Dashboard", type: "interactive", lastGenerated: "2024-01-10", schedule: "Weekly" },
        { name: "Cost Center Performance", type: "excel", lastGenerated: "2024-01-06", schedule: "Monthly" }
      ]
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "interactive": return "Monitor";
      case "pdf": return "FileText";
      case "excel": return "Table";
      default: return "FileText";
    }
  };

  const getTypeVariant = (type) => {
    switch (type) {
      case "interactive": return "improve";
      case "pdf": return "maintain";
      case "excel": return "todo";
      default: return "default";
    }
  };

  const getScheduleColor = (schedule) => {
    switch (schedule) {
      case "Real-time":
      case "Daily": return "text-green-600";
      case "Weekly": return "text-blue-600";
      case "Monthly": return "text-yellow-600";
      case "Quarterly": return "text-purple-600";
      default: return "text-slate-600";
    }
  };

  const totalReports = reportCategories.reduce((acc, cat) => acc + cat.reports.length, 0);
  const interactiveReports = reportCategories.reduce((acc, cat) => 
    acc + cat.reports.filter(report => report.type === "interactive").length, 0
  );
  const scheduledReports = reportCategories.reduce((acc, cat) => 
    acc + cat.reports.filter(report => report.schedule !== "On-demand").length, 0
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Reports & Analytics
          </h1>
          <p className="text-slate-600">
            Access comprehensive reports and analytics across all business operations
          </p>
        </div>
        <Button className="shadow-lg">
          <ApperIcon name="Plus" className="h-4 w-4 mr-2" />
          Create Report
        </Button>
      </div>

      {/* Report Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="BarChart3" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-blue-700">{totalReports}</p>
            <p className="text-sm text-blue-600">Total Reports</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="Monitor" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-green-700">{interactiveReports}</p>
            <p className="text-sm text-green-600">Interactive</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="Clock" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-purple-700">{scheduledReports}</p>
            <p className="text-sm text-purple-600">Scheduled</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="TrendingUp" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-yellow-700">{reportCategories.length}</p>
            <p className="text-sm text-yellow-600">Categories</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Dashboard */}
      <Card className="shadow-xl bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ApperIcon name="Zap" className="h-5 w-5 text-primary-600" />
            Quick Access Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="secondary" className="justify-start h-auto p-4 shadow-lg">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <ApperIcon name="Activity" className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">Live Operations</span>
                </div>
                <span className="text-xs text-slate-600">Real-time task monitoring</span>
              </div>
            </Button>
            
            <Button variant="secondary" className="justify-start h-auto p-4 shadow-lg">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <ApperIcon name="Users" className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">Team Performance</span>
                </div>
                <span className="text-xs text-slate-600">Daily productivity metrics</span>
              </div>
            </Button>
            
            <Button variant="secondary" className="justify-start h-auto p-4 shadow-lg">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <ApperIcon name="Server" className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">System Health</span>
                </div>
                <span className="text-xs text-slate-600">Infrastructure monitoring</span>
              </div>
            </Button>
            
            <Button variant="secondary" className="justify-start h-auto p-4 shadow-lg">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <ApperIcon name="DollarSign" className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">Financial KPIs</span>
                </div>
                <span className="text-xs text-slate-600">Budget and cost analysis</span>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Report Categories */}
      <div className="space-y-6">
        {reportCategories.map((category) => (
          <Card key={category.id} className="shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 mb-2">
                    <ApperIcon name="BarChart3" className="h-5 w-5 text-primary-600" />
                    {category.category}
                  </CardTitle>
                  <p className="text-sm text-slate-600">{category.description}</p>
                </div>
                <Badge variant="secondary">
                  {category.reports.length} reports
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.reports.map((report, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:from-slate-100 hover:to-slate-200 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                          <ApperIcon name={getTypeIcon(report.type)} className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800 mb-1">{report.name}</h4>
                          <Badge variant={getTypeVariant(report.type)} className="text-xs">
                            {report.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-slate-600 mb-3">
                      <div className="flex items-center justify-between">
                        <span>Last Generated:</span>
                        <span className="font-medium">{report.lastGenerated}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Schedule:</span>
                        <span className={`font-medium ${getScheduleColor(report.schedule)}`}>
                          {report.schedule}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="flex-1 hover:bg-blue-50 hover:text-blue-600">
                        <ApperIcon name="Eye" className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1 hover:bg-green-50 hover:text-green-600">
                        <ApperIcon name="Download" className="h-3 w-3 mr-1" />
                        Export
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1 hover:bg-orange-50 hover:text-orange-600">
                        <ApperIcon name="Settings" className="h-3 w-3 mr-1" />
                        Configure
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Management Tools */}
      <Card className="shadow-xl bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-1">
                Advanced Analytics & Insights
              </h3>
              <p className="text-primary-600">
                Generate custom reports, schedule automated delivery, and share insights across teams.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="shadow-lg whitespace-nowrap">
                <ApperIcon name="Calendar" className="h-4 w-4 mr-2" />
                Schedule Reports
              </Button>
              <Button className="shadow-lg whitespace-nowrap">
                <ApperIcon name="Share" className="h-4 w-4 mr-2" />
                Report Builder
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;