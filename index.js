const core = require('@actions/core');
const Util = require('util');
const execSync = Util.promisify(require('child_process').execSync);

// most @actions toolkit packages have async methods
async function run() {
  try {
    if(process.platform !== 'linux') {
      throw new Error('This action runs only on Linux currently');
    }

    // Using SQLcl: Release 22.2.1.0 Production Build: 22.2.1.201.1456 instead of the latest due to Liquibase bug
    execSync('wget https://objectstorage.eu-amsterdam-1.oraclecloud.com/p/rBz7NIZQsEXsXN6yqnLn8m9fLmTHZUY7Z5uhPBBUzsoiW0ceUoY1jyU5y7DjEWJx/n/frsxwtjslf35/b/oracledb/o/V1022102-01.zip');
    execSync('unzip -q V1022102-01.zip');

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
