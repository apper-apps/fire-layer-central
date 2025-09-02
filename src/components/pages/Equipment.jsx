import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const Equipment = () => {
  const equipmentCategories = [
    {
      id: 1,
      category: "Manufacturing",
      equipment: [
        { name: "CNC Machine #1", status: "operational", location: "Floor A", lastMaintenance: "2024-01-05" },
        { name: "Assembly Line Conveyor", status: "maintenance", location: "Floor B", lastMaintenance: "2024-01-08" },
        { name: "Quality Testing Station", status: "operational", location: "QC Lab", lastMaintenance: "2024-01-03" }
      ]
    },
    {
      id: 2,
      category: "IT Hardware",
      equipment: [
        { name: "Server Rack #1", status: "operational", location: "Data Center", lastMaintenance: "2024-01-07" },
        { name: "Network Switch", status: "operational", location: "IT Room", lastMaintenance: "2024-01-02" },
        { name: "UPS Battery System", status: "warning", location: "Data Center", lastMaintenance: "2023-12-15" }
      ]
    },
    {
      id: 3,
      category: "Office Equipment",
      equipment: [
        { name: "Color Printer - Main Office", status: "operational", location: "Main Office", lastMaintenance: "2024-01-06" },
        { name: "Conference Room Projector", status: "maintenance", location: "Conference Room A", lastMaintenance: "2024-01-04" },
        { name: "Document Scanner", status: "operational", location: "Admin Office", lastMaintenance: "2024-01-01" }
      ]
    },
    {
      id: 4,
      category: "Facility Systems",
      equipment: [
        { name: "HVAC Unit - Building A", status: "operational", location: "Rooftop", lastMaintenance: "2024-01-09" },
        { name: "Emergency Generator", status: "operational", location: "Utility Room", lastMaintenance: "2023-12-28" },
        { name: "Security Camera System", status: "warning", location: "Multiple", lastMaintenance: "2023-12-20" }
      ]
    }
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case "operational": return "improve";
      case "maintenance": return "maintain";
      case "warning": return "react";
      case "offline": return "todo";
      default: return "default";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "operational": return "CheckCircle";
      case "maintenance": return "Wrench";
      case "warning": return "AlertTriangle";
      case "offline": return "XCircle";
      default: return "Circle";
    }
  };

  const totalEquipment = equipmentCategories.reduce((acc, cat) => acc + cat.equipment.length, 0);
  const operationalCount = equipmentCategories.reduce((acc, cat) => 
    acc + cat.equipment.filter(eq => eq.status === "operational").length, 0
  );
  const maintenanceCount = equipmentCategories.reduce((acc, cat) => 
    acc + cat.equipment.filter(eq => eq.status === "maintenance").length, 0
  );
  const warningCount = equipmentCategories.reduce((acc, cat) => 
    acc + cat.equipment.filter(eq => eq.status === "warning").length, 0
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Equipment Management
          </h1>
          <p className="text-slate-600">
            Track, maintain, and monitor all your business equipment and assets
          </p>
        </div>
        <Button className="shadow-lg">
          <ApperIcon name="Plus" className="h-4 w-4 mr-2" />
          Add Equipment
        </Button>
      </div>

      {/* Equipment Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="Package" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-blue-700">{totalEquipment}</p>
            <p className="text-sm text-blue-600">Total Equipment</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="CheckCircle" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-green-700">{operationalCount}</p>
            <p className="text-sm text-green-600">Operational</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="Wrench" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-yellow-700">{maintenanceCount}</p>
            <p className="text-sm text-yellow-600">In Maintenance</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <ApperIcon name="AlertTriangle" className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-red-700">{warningCount}</p>
            <p className="text-sm text-red-600">Needs Attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Equipment Categories */}
      <div className="space-y-6">
        {equipmentCategories.map((category) => (
          <Card key={category.id} className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ApperIcon name="Wrench" className="h-5 w-5 text-primary-600" />
                {category.category}
                <Badge variant="secondary" className="ml-2">
                  {category.equipment.length} items
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.equipment.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:from-slate-100 hover:to-slate-200 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-medium text-slate-800 line-clamp-2">{item.name}</h4>
                      <Badge variant={getStatusVariant(item.status)} className="ml-2">
                        <ApperIcon name={getStatusIcon(item.status)} className="h-3 w-3 mr-1" />
                        {item.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <ApperIcon name="MapPin" className="h-3 w-3" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ApperIcon name="Calendar" className="h-3 w-3" />
                        <span>Last service: {item.lastMaintenance}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-3">
                      <Button variant="ghost" size="sm" className="flex-1 hover:bg-blue-50 hover:text-blue-600">
                        <ApperIcon name="Settings" className="h-3 w-3 mr-1" />
                        Configure
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

      {/* Maintenance Schedule */}
      <Card className="shadow-xl bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-1">
                Maintenance Schedule Overview
              </h3>
              <p className="text-primary-600">
                Stay on top of equipment maintenance to prevent downtime and extend asset life.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="shadow-lg whitespace-nowrap">
                <ApperIcon name="Calendar" className="h-4 w-4 mr-2" />
                View Schedule
              </Button>
              <Button className="shadow-lg whitespace-nowrap">
                <ApperIcon name="BarChart3" className="h-4 w-4 mr-2" />
                Equipment Reports
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Equipment;