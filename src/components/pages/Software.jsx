import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const Software = () => {
  const softwareCategories = [
    {
      id: 1,
      category: "Business Applications",
      applications: [
        { name: "Customer Relationship Management", version: "2.1.3", status: "active", license: "Enterprise", renewal: "2024-12-15" },
        { name: "Enterprise Resource Planning", version: "4.2.1", status: "active", license: "Business", renewal: "2024-08-30" },
        { name: "Human Resources Management", version: "1.8.9", status: "update", license: "Professional", renewal: "2024-06-20" },
        { name: "Financial Accounting Suite", version: "3.5.2", status: "active", license: "Enterprise", renewal: "2024-11-10" }
      ]
    },
    {
      id: 2,
      category: "Development Tools",
      applications: [
        { name: "Visual Studio Enterprise", version: "2023.1", status: "active", license: "Enterprise", renewal: "2024-05-15" },
        { name: "Git Repository Manager", version: "8.14.2", status: "active", license: "Team", renewal: "2024-09-25" },
        { name: "Database Management Studio", version: "19.1", status: "trial", license: "Trial", renewal: "2024-02-01" },
        { name: "API Testing Platform", version: "10.7", status: "active", license: "Professional", renewal: "2024-07-18" }
      ]
    },
    {
      id: 3,
      category: "Infrastructure Software",
      applications: [
        { name: "Operating System Server", version: "2022", status: "active", license: "Datacenter", renewal: "2024-10-05" },
        { name: "Virtualization Platform", version: "7.0.3", status: "active", license: "Enterprise", renewal: "2024-04-12" },
        { name: "Backup & Recovery Solution", version: "12.1", status: "warning", license: "Business", renewal: "2024-01-28" },
        { name: "Security Management Console", version: "6.8.4", status: "update", license: "Premium", renewal: "2024-03-22" }
      ]
    },
    {
      id: 4,
      category: "Productivity Suite",
      applications: [
        { name: "Office Productivity Suite", version: "365", status: "active", license: "E5", renewal: "2024-08-15" },
        { name: "Team Collaboration Platform", version: "2024.1", status: "active", license: "Business+", renewal: "2024-06-30" },
        { name: "Project Management Tool", version: "2023.4", status: "active", license: "Professional", renewal: "2024-09-10" },
        { name: "Document Management System", version: "5.2.1", status: "trial", license: "Trial", renewal: "2024-01-20" }
      ]
    }
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case "active": return "improve";
      case "update": return "maintain";
      case "warning": return "react";
      case "trial": return "todo";
      case "expired": return "default";
      default: return "default";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active": return "CheckCircle";
      case "update": return "Download";
      case "warning": return "AlertTriangle";
      case "trial": return "Clock";
      case "expired": return "XCircle";
      default: return "Circle";
    }
  };

  const totalApplications = softwareCategories.reduce((acc, cat) => acc + cat.applications.length, 0);
  const activeCount = softwareCategories.reduce((acc, cat) => 
    acc + cat.applications.filter(app => app.status === "active").length, 0
  );
  const updateCount = softwareCategories.reduce((acc, cat) => 
    acc + cat.applications.filter(app => app.status === "update").length, 0
  );
  const warningCount = softwareCategories.reduce((acc, cat) => 
    acc + cat.applications.filter(app => app.status === "warning").length, 0
  );
  const trialCount = softwareCategories.reduce((acc, cat) => 
    acc + cat.applications.filter(app => app.status === "trial").length, 0
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Software Management
          </h1>
          <p className="text-slate-600">
            Manage software licenses, updates, and deployments across your organization
          </p>
        </div>
        <Button className="shadow-lg">
          <ApperIcon name="Plus" className="h-4 w-4 mr-2" />
          Add Software
        </Button>
      </div>

      {/* Software Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ApperIcon name="Monitor" className="h-5 w-5 text-white" />
            </div>
            <p className="text-xl font-bold text-blue-700">{totalApplications}</p>
            <p className="text-xs text-blue-600">Total Apps</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ApperIcon name="CheckCircle" className="h-5 w-5 text-white" />
            </div>
            <p className="text-xl font-bold text-green-700">{activeCount}</p>
            <p className="text-xs text-green-600">Active</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ApperIcon name="Download" className="h-5 w-5 text-white" />
            </div>
            <p className="text-xl font-bold text-yellow-700">{updateCount}</p>
            <p className="text-xs text-yellow-600">Updates</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ApperIcon name="AlertTriangle" className="h-5 w-5 text-white" />
            </div>
            <p className="text-xl font-bold text-red-700">{warningCount}</p>
            <p className="text-xs text-red-600">Warnings</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ApperIcon name="Clock" className="h-5 w-5 text-white" />
            </div>
            <p className="text-xl font-bold text-purple-700">{trialCount}</p>
            <p className="text-xs text-purple-600">Trials</p>
          </CardContent>
        </Card>
      </div>

      {/* Software Categories */}
      <div className="space-y-6">
        {softwareCategories.map((category) => (
          <Card key={category.id} className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ApperIcon name="Monitor" className="h-5 w-5 text-primary-600" />
                {category.category}
                <Badge variant="secondary" className="ml-2">
                  {category.applications.length} applications
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.applications.map((app, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:from-slate-100 hover:to-slate-200 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-medium text-slate-800 flex-1 pr-2">{app.name}</h4>
                      <Badge variant={getStatusVariant(app.status)}>
                        <ApperIcon name={getStatusIcon(app.status)} className="h-3 w-3 mr-1" />
                        {app.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mb-3">
                      <div>
                        <span className="text-slate-500">Version:</span>
                        <span className="ml-2 font-medium">{app.version}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">License:</span>
                        <span className="ml-2 font-medium">{app.license}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <ApperIcon name="Calendar" className="h-3 w-3" />
                        <span>Renewal: {app.renewal}</span>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-7 px-2 hover:bg-blue-50 hover:text-blue-600">
                          <ApperIcon name="Settings" className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2 hover:bg-green-50 hover:text-green-600">
                          <ApperIcon name="Download" className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* License Management */}
      <Card className="shadow-xl bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-1">
                License Compliance & Optimization
              </h3>
              <p className="text-primary-600">
                Track software licenses, renewals, and optimize your software spending.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="shadow-lg whitespace-nowrap">
                <ApperIcon name="FileText" className="h-4 w-4 mr-2" />
                License Audit
              </Button>
              <Button className="shadow-lg whitespace-nowrap">
                <ApperIcon name="BarChart3" className="h-4 w-4 mr-2" />
                Usage Analytics
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Software;