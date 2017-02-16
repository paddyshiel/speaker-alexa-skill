const { name, description, version } = require('../package.json');

export default {
  accessKeyId: 'AKIAJID6GY6R4B3OUFOA',
  secretAccessKey: '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',
  role: 'arn:aws:iam::839881462406:role/lambda',
  functionName: name,
  description: `${description} (version ${version})`,
  region: 'us-east-1',
  handler: 'index.handler'
};
