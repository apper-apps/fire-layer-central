import navigationData from "@/services/mockData/navigation.json";

class NavigationService {
  constructor() {
    this.navigationItems = [...navigationData];
  }

  async delay() {
    return new Promise(resolve => setTimeout(resolve, 100));
  }

  async getAll() {
    await this.delay();
    return [...this.navigationItems];
  }

  async getById(id) {
    await this.delay();
    const findItem = (items) => {
      for (const item of items) {
        if (item.Id === parseInt(id)) {
          return { ...item };
        }
        if (item.children && item.children.length > 0) {
          const found = findItem(item.children);
          if (found) return found;
        }
      }
      return null;
    };
    return findItem(this.navigationItems);
  }
}

export default new NavigationService();