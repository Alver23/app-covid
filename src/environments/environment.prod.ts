export const environment = {
  production: true,
  api: {
    base: 'https://api-covid.now.sh/api/',
    reports: 'reports',
    reportsV2: 'v2/reports',
    getUrl(url) {
      return `${this.base}${this[url]}`;
    }
  }
};
