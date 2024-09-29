const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
  },
  images: {
    domains: [
      'luxorts-backend-staging.s3.us-east-2.amazonaws.com',
      'luxorts-backend-prototype.s3.us-east-2.amazonaws.com',
    ],
  },
};
