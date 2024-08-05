const dataFetcher = {
  dataSource: {
    user_id: 12345,
    name: 'Alice'
  },
  _get(key) {
    return this.dataSource[key];
  }
};

// Usage
let userId = dataFetcher._get('user_id');
console.log(userId);  // Output: 12345
