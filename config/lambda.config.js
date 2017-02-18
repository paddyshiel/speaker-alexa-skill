const { name, description, version } = require('../package.json');

export default {
  role: 'arn:aws:iam::839881462406:role/lambda',
  functionName: name,
  description: `${description} (version ${version})`,
  region: 'us-east-1',
  handler: 'index.handler',
  runtime: 'nodejs4.3'
};
