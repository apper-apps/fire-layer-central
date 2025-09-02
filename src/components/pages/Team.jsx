import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const Team = () => {
  const departments = [
    {
      id: 1,
      name: "Operations",
      members: [
        { name: "Sarah Johnson", role: "Operations Manager", email: "sarah.j@company.com", status: "active", skills: ["Process Management", "Quality Control"] },
        { name: "Mike Davis", role: "Operations Specialist", email: "mike.d@company.com", status: "active", skills: ["Data Analysis", "Automation"] },
        { name: "Lisa Chen", role: "Quality Assurance Lead", email: "lisa.c@company.com", status: "active", skills: ["Testing", "Documentation"] }
      ]
    },
    {
      id: 2,
      name: "IT Department",
      members: [
        { name: "John Smith", role: "IT Manager", email: "john.s@company.com", status: "active", skills: ["Infrastructure", "Security"] },
        { name: "David Park", role: "System Administrator", email: "david.p@company.com", status: "active", skills: ["Server Management", "Networking"] },
        { name: "Emma Rodriguez", role: "Software Developer", email: "emma.r@company.com", status: "active", skills: ["Full Stack", "DevOps"] }
      ]
    },
    {
      id: 3,
      name: "Maintenance",
      members: [
        { name: "Tom Wilson", role: "Maintenance Supervisor", email: "tom.w@company.com", status: "active", skills: ["Equipment Repair", "Preventive Maintenance"] },
        { name: "Robert Taylor", role: "Maintenance Technician", email: "robert.t@company.com", status: "active", skills: ["Electrical", "Mechanical"] },
        { name: "Jennifer Brown", role: "Facilities Coordinator", email: "jennifer.b@company.com", status: "vacation", skills: ["Space Planning", "Vendor Management"] }
      ]
    },
    {
      id: 4,
      name: "Support Staff",
      members: [
        { name: "Alex Johnson", role: "Administrative Assistant", email: "alex.j@company.com", status: "active", skills: ["Documentation", "Communication"] },
        { name: "Maria Garcia", role: "Training Coordinator", email: "maria.g@company.com", status: "active", skills: ["Training Development", "Performance"] },
        { name: "Chris Anderson", role: "Safety Officer", email: "chris.a@company.com", status: "active", skills: ["Safety Protocols", "Risk Assessment"] }
      ]
    }
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case "active": return "improve";
      case "vacation": return "maintain";
      case "unavailable": return "react";
      case "training": return "todo";
      default: return "default";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active": return "CheckCircle";
      case "vacation": return "Calendar";
      case "unavailable": return "XCircle";
      case "training": return "BookOpen";
      default: return "Circle";
    }
  };

  const totalMembers = departments.reduce((acc, dept) => acc + dept.members.length, 0);
  const activeMembers = departments.reduce((acc, dept) => 
    acc + dept.members.filter(member => member.status === "active").length, 0
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Team Management
          </h1>
          <p className="text-slate-600">
            Manage your team members, roles, and responsibilities across all departments
          </p>
        </div>
        <Button className="shadow-lg">
          <ApperIcon name="Plus" className="h-4 w-4 mr-2" />
          Add Team Member
        </Button>
      </div>

      {/* Team Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="Users" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-blue-700">{totalMembers}</p>
            <p className="text-sm text-blue-600">Total Team Members</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="CheckCircle" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-green-700">{activeMembers}</p>
            <p className="text-sm text-green-600">Active Members</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="Building" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-purple-700">{departments.length}</p>
            <p className="text-sm text-purple-600">Departments</p>
          </CardContent>
        </Card>
      </div>

      {/* Department Cards */}
      <div className="space-y-6">
        {departments.map((department) => (
          <Card key={department.id} className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ApperIcon name="Users" className="h-5 w-5 text-primary-600" />
                {department.name}
                <Badge variant="secondary" className="ml-2">
                  {department.members.length} members
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {department.members.map((member, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:from-slate-100 hover:to-slate-200 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-sm">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">{member.name}</h4>
                          <p className="text-sm text-slate-600">{member.role}</p>
                        </div>
                      </div>
                      <Badge variant={getStatusVariant(member.status)}>
                        <ApperIcon name={getStatusIcon(member.status)} className="h-3 w-3 mr-1" />
                        {member.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <ApperIcon name="Mail" className="h-3 w-3" />
                        <span className="truncate">{member.email}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-xs text-slate-500 mb-2">Skills & Expertise:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="flex-1 hover:bg-blue-50 hover:text-blue-600">
                        <ApperIcon name="MessageSquare" className="h-3 w-3 mr-1" />
                        Contact
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1 hover:bg-green-50 hover:text-green-600">
                        <ApperIcon name="Calendar" className="h-3 w-3 mr-1" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Management Actions */}
      <Card className="shadow-xl bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-1">
                Team Development & Performance
              </h3>
              <p className="text-primary-600">
                Track performance, manage training, and optimize team productivity across departments.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="shadow-lg whitespace-nowrap">
                <ApperIcon name="BookOpen" className="h-4 w-4 mr-2" />
                Training Programs
              </Button>
              <Button className="shadow-lg whitespace-nowrap">
                <ApperIcon name="TrendingUp" className="h-4 w-4 mr-2" />
                Performance Reports
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Team;