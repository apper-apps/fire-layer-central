class NavigationService {
  constructor() {
    const { ApperClient } = window.ApperSDK;
    this.apperClient = new ApperClient({
      apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
      apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
    });
    this.tableName = 'navigation_item_c';
  }

  async getAll() {
    try {
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "label_c" } },
          { field: { Name: "path_c" } },
          { field: { Name: "icon_c" } },
          { field: { Name: "children_c" } }
        ],
        orderBy: [
          {
            fieldName: "Id",
            sorttype: "ASC"
          }
        ]
      };
      
      const response = await this.apperClient.fetchRecords(this.tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        return [];
      }
      
      // Transform the data to match expected format
      const transformedData = (response.data || []).map(item => ({
        ...item,
        label: item.label_c,
        path: item.path_c,
        icon: item.icon_c,
        children: item.children_c ? JSON.parse(item.children_c) : []
      }));
      
      return transformedData;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching navigation:", error?.response?.data?.message);
      } else {
        console.error(error);
      }
      return [];
    }
  }

  async getById(id) {
    try {
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "label_c" } },
          { field: { Name: "path_c" } },
          { field: { Name: "icon_c" } },
          { field: { Name: "children_c" } }
        ]
      };
      
      const response = await this.apperClient.getRecordById(this.tableName, id, params);
      
      if (!response.success) {
        console.error(response.message);
        return null;
      }
      
      if (response.data) {
        return {
          ...response.data,
          label: response.data.label_c,
          path: response.data.path_c,
          icon: response.data.icon_c,
          children: response.data.children_c ? JSON.parse(response.data.children_c) : []
        };
      }
      
      return null;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching navigation item with ID ${id}:`, error?.response?.data?.message);
      } else {
        console.error(error);
      }
      return null;
    }
  }
}

export default new NavigationService();