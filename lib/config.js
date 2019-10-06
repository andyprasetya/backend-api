var environments = {};

environments.staging = {
  'version' : '1.0.0',
  'codeName' : 'Rinjani',
  'httpPort' : 3000,
  'httpsPort' : 3001,
  'envName' : 'staging'
};

environments.production = {
  'version' : '1.0.0',
  'codeName' : 'Rinjani',
  'httpPort' : 5000,
  'httpsPort' : 5001,
  'envName' : 'production'
};
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;
module.exports = environmentToExport;
