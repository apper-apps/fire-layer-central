import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const Ideas = () => {
  const ideas = [
    {
      id: 1,
      title: "Automated Quality Control System",
      description: "Implement AI-powered quality control to reduce manual inspection time and improve accuracy",
      category: "automation",
      priority: "high",
      status: "review",
      submittedBy: "Sarah Johnson",
      submittedDate: "2024-01-08",
      votes: 12,
      estimatedCost: "$25,000",
      timeframe: "3-4 months"
    },
    {
      id: 2,
      title: "Remote Work Policy Enhancement",
      description: "Expand remote work options and create hybrid workspace solutions for better work-life balance",
      category: "policy",
      priority: "medium",
      status: "approved",
      submittedBy: "Mike Davis",
      submittedDate: "2024-01-06",
      votes: 8,
      estimatedCost: "$5,000",
      timeframe: "1-2 months"
    },
    {
      id: 3,
      title: "Energy Efficiency Upgrade",
      description: "Install smart lighting and HVAC controls to reduce energy consumption by 30%",
      category: "sustainability",
      priority: "medium",
      status: "planning",
      submittedBy: "Lisa Chen",
      submittedDate: "2024-01-05",
      votes: 15,
      estimatedCost: "$40,000",
      timeframe: "4-6 months"
    },
    {
      id: 4,
      title: "Employee Training Portal",
      description: "Create an online learning platform for continuous skill development and certification tracking",
      category: "training",
      priority: "high",
      status: "new",
      submittedBy: "Emma Rodriguez",
      submittedDate: "2024-01-09",
      votes: 6,
      estimatedCost: "$15,000",
      timeframe: "2-3 months"
    },
    {
      id: 5,
      title: "Inventory Management Optimization",
      description: "Implement RFID tracking and predictive analytics for better inventory control",
      category: "technology",
      priority: "medium",
      status: "review",
      submittedBy: "John Smith",
      submittedDate: "2024-01-04",
      votes: 10,
      estimatedCost: "$30,000",
      timeframe: "3-4 months"
    },
    {
      id: 6,
      title: "Customer Feedback Integration",
      description: "Develop real-time customer feedback system with automated response workflows",
      category: "customer",
      priority: "high",
      status: "approved",
      submittedBy: "David Park",
      submittedDate: "2024-01-03",
      votes: 14,
      estimatedCost: "$12,000",
      timeframe: "2 months"
    },
    {
      id: 7,
      title: "Flexible Break Areas",
      description: "Redesign break areas with comfortable seating, games, and quiet zones for better employee wellness",
      category: "workplace",
      priority: "low",
      status: "new",
      submittedBy: "Tom Wilson",
      submittedDate: "2024-01-07",
      votes: 5,
      estimatedCost: "$8,000",
      timeframe: "1 month"
    },
    {
      id: 8,
      title: "Predictive Maintenance System",
      description: "Use IoT sensors and machine learning to predict equipment failures before they occur",
      category: "maintenance",
      priority: "high",
      status: "planning",
      submittedBy: "Robert Taylor",
      submittedDate: "2024-01-02",
      votes: 11,
      estimatedCost: "$35,000",
      timeframe: "4-5 months"
    }
  ];

  const getCategoryVariant = (category) => {
    switch (category) {
      case "automation": return "improve";
      case "policy": return "maintain";
      case "sustainability": return "improve";
      case "training": return "todo";
      case "technology": return "improve";
      case "customer": return "maintain";
      case "workplace": return "todo";
      case "maintenance": return "maintain";
      default: return "default";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "automation": return "Zap";
      case "policy": return "FileText";
      case "sustainability": return "Leaf";
      case "training": return "BookOpen";
      case "technology": return "Monitor";
      case "customer": return "Users";
      case "workplace": return "Building";
      case "maintenance": return "Wrench";
      default: return "Lightbulb";
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case "new": return "todo";
      case "review": return "maintain";
      case "approved": return "improve";
      case "planning": return "maintain";
      case "implemented": return "improve";
      case "rejected": return "default";
      default: return "default";
    }
  };

  const getPriorityVariant = (priority) => {
    switch (priority) {
      case "high": return "react";
      case "medium": return "maintain";
      case "low": return "improve";
      default: return "default";
    }
  };

  const ideaStats = {
    total: ideas.length,
    new: ideas.filter(idea => idea.status === "new").length,
    approved: ideas.filter(idea => idea.status === "approved").length,
    inReview: ideas.filter(idea => idea.status === "review").length,
    highPriority: ideas.filter(idea => idea.priority === "high").length
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Innovation Ideas
          </h1>
          <p className="text-slate-600">
            Capture, evaluate, and implement innovative ideas to improve business operations
          </p>
        </div>
        <Button className="shadow-lg">
          <ApperIcon name="Plus" className="h-4 w-4 mr-2" />
          Submit Idea
        </Button>
      </div>

      {/* Idea Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ApperIcon name="Lightbulb" className="h-5 w-5 text-white" />
            </div>
            <p className="text-xl font-bold text-blue-700">{ideaStats.total}</p>
            <p className="text-xs text-blue-600">Total Ideas</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ApperIcon name="PlusCircle" className="h-5 w-5 text-white" />
            </div>
            <p className="text-xl font-bold text-purple-700">{ideaStats.new}</p>
            <p className="text-xs text-purple-600">New</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ApperIcon name="Eye" className="h-5 w-5 text-white" />
            </div>
            <p className="text-xl font-bold text-yellow-700">{ideaStats.inReview}</p>
            <p className="text-xs text-yellow-600">In Review</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ApperIcon name="CheckCircle" className="h-5 w-5 text-white" />
            </div>
            <p className="text-xl font-bold text-green-700">{ideaStats.approved}</p>
            <p className="text-xs text-green-600">Approved</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ApperIcon name="AlertTriangle" className="h-5 w-5 text-white" />
            </div>
            <p className="text-xl font-bold text-red-700">{ideaStats.highPriority}</p>
            <p className="text-xs text-red-600">High Priority</p>
          </CardContent>
        </Card>
      </div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ideas.map((idea) => (
          <Card key={idea.id} className="hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <ApperIcon name={getCategoryIcon(idea.category)} className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{idea.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={getCategoryVariant(idea.category)} className="text-xs">
                        {idea.category}
                      </Badge>
                      <Badge variant={getStatusVariant(idea.status)} className="text-xs">
                        {idea.status}
                      </Badge>
                      <Badge variant={getPriorityVariant(idea.priority)} className="text-xs">
                        {idea.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <ApperIcon name="ThumbsUp" className="h-4 w-4" />
                    <span>{idea.votes}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-50">
                    <ApperIcon name="MoreVertical" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">{idea.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <span className="text-slate-500">Estimated Cost:</span>
                  <span className="ml-2 font-medium">{idea.estimatedCost}</span>
                </div>
                <div>
                  <span className="text-slate-500">Timeframe:</span>
                  <span className="ml-2 font-medium">{idea.timeframe}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-600">
                  <ApperIcon name="User" className="h-3 w-3" />
                  <span>{idea.submittedBy}</span>
                  <span>•</span>
                  <span>{idea.submittedDate}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="hover:bg-blue-50 hover:text-blue-600">
                    <ApperIcon name="ThumbsUp" className="h-3 w-3 mr-1" />
                    Vote
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-green-50 hover:text-green-600">
                    <ApperIcon name="MessageSquare" className="h-3 w-3 mr-1" />
                    Comment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Innovation Management */}
      <Card className="shadow-xl bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-1">
                Innovation Pipeline Management
              </h3>
              <p className="text-primary-600">
                Foster innovation culture by collecting, evaluating, and implementing creative solutions.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="shadow-lg whitespace-nowrap">
                <ApperIcon name="TrendingUp" className="h-4 w-4 mr-2" />
                Innovation Metrics
              </Button>
              <Button className="shadow-lg whitespace-nowrap">
                <ApperIcon name="Zap" className="h-4 w-4 mr-2" />
                Implementation Plan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ideas;