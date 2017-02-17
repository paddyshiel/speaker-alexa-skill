const { name, description, version } = require('../package.json');

export default {
  functionName: name,
  description: `${description} (version ${version})`,
  region: 'us-east-1',
  handler: 'index.handler',
  runtime: 'nodejs4.3'
};
