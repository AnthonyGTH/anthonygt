export const environment = {
  production: true,
  version: require('../../package.json').version,
  angularCli: require('../../package.json').devDependencies['@angular/cli'],
  typescript: require('../../package.json').devDependencies['typescript'],
};
