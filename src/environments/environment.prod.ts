export const environment = {
  production: true,
  api: {
    base: 'https://api-covid.now.sh/api/',
    cases: 'cases',
    casesRecovered: 'cases/recovered',
    casesDeaths: 'cases/deaths',
    getUrl(url) {
      return `${this.base}${this[url]}`;
    }
  }
};
