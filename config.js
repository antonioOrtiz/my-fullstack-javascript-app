
const env = process.env;

const nodeEnv = env.NODE_ENV || 'development';

const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};


const config = {
  // mongodbUri: 'mongodb://localhost:27017/test',
  port: env.PORT || 8016,
  host: env.HOST || '0.0.0.0'
}

module.exports = {
  nodeEnv,
  logStars,
  config
}
