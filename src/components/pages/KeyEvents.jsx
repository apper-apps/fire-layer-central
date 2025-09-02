import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import { format, addDays, addWeeks, addMonths } from "date-fns";

const KeyEvents = () => {
  const currentDate = new Date();
  
  const events = [
    {
      id: 1,
      title: "Quarterly Board Meeting",
      description: "Q4 performance review and strategic planning session",
      date: addDays(currentDate, 5),
      type: "meeting",
      priority: "high",
      attendees: ["Board Members", "Executive Team"],
      location: "Conference Room A"
    },
    {
      id: 2,
      title: "System Maintenance Window",
      description: "Scheduled maintenance for core business systems",
      date: addDays(currentDate, 2),
      type: "maintenance",
      priority: "medium",
      attendees: ["IT Team", "Operations"],
      location: "Data Center"
    },
    {
      id: 3,
      title: "Annual Safety Audit",
      description: "Comprehensive safety compliance review",
      date: addWeeks(currentDate, 2),
      type: "audit",
      priority: "high",
      attendees: ["Safety Officer", "Department Heads"],
      location: "All Facilities"
    },
    {
      id: 4,
      title: "New Employee Orientation",
      description: "Onboarding session for new team members",
      date: addDays(currentDate, 7),
      type: "training",
      priority: "medium",
      attendees: ["HR", "New Hires"],
      location: "Training Room"
    },
    {
      id: 5,
      title: "Budget Planning Session",
      description: "FY2024 budget allocation and resource planning",
      date: addWeeks(currentDate, 3),
      type: "planning",
      priority: "high",
      attendees: ["Finance Team", "Department Managers"],
      location: "Executive Conference Room"
    },
    {
      id: 6,
      title: "Equipment Upgrade Project",
      description: "Manufacturing equipment modernization initiative",
      date: addMonths(currentDate, 1),
      type: "project",
      priority: "medium",
      attendees: ["Operations", "Vendors"],
      location: "Production Floor"
    },
    {
      id: 7,
      title: "Customer Feedback Workshop",
      description: "Review customer satisfaction data and improvement strategies",
      date: addWeeks(currentDate, 1),
      type: "workshop",
      priority: "medium",
      attendees: ["Customer Service", "Product Team"],
      location: "Meeting Room B"
    },
    {
      id: 8,
      title: "Cybersecurity Assessment",
      description: "Annual security posture review and penetration testing",
      date: addDays(currentDate, 14),
      type: "security",
      priority: "high",
      attendees: ["IT Security", "External Auditors"],
      location: "IT Department"
    }
  ];

  const getTypeVariant = (type) => {
    switch (type) {
      case "meeting": return "improve";
      case "maintenance": return "maintain";
      case "audit": return "react";
      case "training": return "todo";
      case "planning": return "improve";
      case "project": return "maintain";
      case "workshop": return "improve";
      case "security": return "react";
      default: return "default";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "meeting": return "Users";
      case "maintenance": return "Wrench";
      case "audit": return "FileText";
      case "training": return "BookOpen";
      case "planning": return "Target";
      case "project": return "Briefcase";
      case "workshop": return "MessageSquare";
      case "security": return "Shield";
      default: return "Calendar";
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

  const upcomingEvents = events
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 4);

  const eventsByType = events.reduce((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Key Events Management
          </h1>
          <p className="text-slate-600">
            Track important business events, meetings, and operational milestones
          </p>
        </div>
        <Button className="shadow-lg">
          <ApperIcon name="Plus" className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>

      {/* Event Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="Calendar" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-blue-700">{events.length}</p>
            <p className="text-sm text-blue-600">Total Events</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="Clock" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-green-700">{upcomingEvents.length}</p>
            <p className="text-sm text-green-600">This Month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="AlertTriangle" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-red-700">
              {events.filter(e => e.priority === "high").length}
            </p>
            <p className="text-sm text-red-600">High Priority</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="Users" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-purple-700">
              {Object.keys(eventsByType).length}
            </p>
            <p className="text-sm text-purple-600">Event Types</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ApperIcon name="Clock" className="h-5 w-5 text-primary-600" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:from-slate-100 hover:to-slate-200 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                      <ApperIcon name={getTypeIcon(event.type)} className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-800 mb-1">{event.title}</h4>
                      <p className="text-sm text-slate-600 line-clamp-2">{event.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 ml-2">
                    <Badge variant={getTypeVariant(event.type)} className="text-xs">
                      {event.type}
                    </Badge>
                    <Badge variant={getPriorityVariant(event.priority)} className="text-xs">
                      {event.priority}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-slate-600 mb-3">
                  <div className="flex items-center gap-2">
                    <ApperIcon name="Calendar" className="h-3 w-3" />
                    <span>{format(event.date, "MMM dd, yyyy 'at' h:mm a")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ApperIcon name="MapPin" className="h-3 w-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ApperIcon name="Users" className="h-3 w-3" />
                    <span>{event.attendees.join(", ")}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="flex-1 hover:bg-blue-50 hover:text-blue-600">
                    <ApperIcon name="Edit2" className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 hover:bg-green-50 hover:text-green-600">
                    <ApperIcon name="Bell" className="h-3 w-3 mr-1" />
                    Remind
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Events List */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ApperIcon name="Calendar" className="h-5 w-5 text-primary-600" />
            All Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {events
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:from-slate-100 hover:to-slate-200 transition-all duration-200"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <ApperIcon name={getTypeIcon(event.type)} className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800">{event.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span>{format(event.date, "MMM dd, yyyy")}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant={getTypeVariant(event.type)} className="text-xs">
                    {event.type}
                  </Badge>
                  <Badge variant={getPriorityVariant(event.priority)} className="text-xs">
                    {event.priority}
                  </Badge>
                  <Button variant="ghost" size="sm" className="hover:bg-blue-50 hover:text-blue-600">
                    <ApperIcon name="ChevronRight" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Event Management Tools */}
      <Card className="shadow-xl bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-1">
                Event Planning & Coordination
              </h3>
              <p className="text-primary-600">
                Streamline event planning, manage attendees, and ensure successful execution.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="shadow-lg whitespace-nowrap">
                <ApperIcon name="Download" className="h-4 w-4 mr-2" />
                Export Calendar
              </Button>
              <Button className="shadow-lg whitespace-nowrap">
                <ApperIcon name="Calendar" className="h-4 w-4 mr-2" />
                View Calendar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KeyEvents;