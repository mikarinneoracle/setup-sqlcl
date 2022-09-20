const core = require('@actions/core');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try {
    if(process.platform !== 'linux') {
      throw new Error('This action runs only on Linux currently');
    }

    const ms = core.getInput('milliseconds');
    core.info(`Waiting ${ms} milliseconds ...`);

    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    await wait(parseInt(ms));
    core.info((new Date()).toTimeString());

    core.setOutput('time', new Date().toTimeString());

    execSync('wget https://download.oracle.com/otn_software/java/sqldeveloper/sqlcl-latest.zip');
    execSync('unzip sqlcl-latest.zip');
    execSync('alias sql="./sqlcl/bin/sql"');

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
