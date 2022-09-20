const core = require('@actions/core');


// most @actions toolkit packages have async methods
async function run() {
  try {
    if(process.platform !== 'linux') {
      throw new Error('This action runs only on Linux currently');
    }

    execSync('wget https://download.oracle.com/otn_software/java/sqldeveloper/sqlcl-latest.zip');
    execSync('unzip sqlcl-latest.zip');
    execSync('alias sql="./sqlcl/bin/sql"');

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
