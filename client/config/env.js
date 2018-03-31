const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

/**
 * Load environment variables.
 *
 * @return {Object} Environment variables
 */
const loadEnvironmentVariables = () => {
  const filePath = path.join(__dirname, '__env__', `${process.env.NODE_ENV || 'development'}.properties`);
  const file = fs.readFileSync(filePath);

  return dotenv.parse(file);
};

module.exports = loadEnvironmentVariables();
