export const environment = {
  production: true,
  api: {
    base: 'https://api-covid.now.sh/api/',
    reports: 'reports',
    getUrl(url) {
      return `${this.base}${this[url]}`;
    }
  }
};
