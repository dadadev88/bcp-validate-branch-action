import * as core from '@actions/core';
import * as github from '@actions/github';

const Environments = {
  CERT: 'CERT',
  PROD: 'PROD'
}

try {
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`[BCP-BV] The event payload: ${payload}`);

  // const context = JSON.stringify(github.context, undefined, 2)
  // console.log(`[BCP-BV] The context: ${context}`);

  const environment = core.getInput('environment');
  if (environment === Environments.CERT) {
    if (github.context.eventName !== 'pull_request')
      core.setFailed('[BCP-BV] Environment is CERT, require Pull Request');
  }
  console.log({ environment });
  if (environment === Environments.PROD) {
    const rc = core.getInput('rc');
    console.log({ rc });
    if (!rc.startsWith('RC-CERT'))
      core.setFailed('Required RC branch/tag. This should begin with "RC-CERT..."');
  }

} catch (error) {
  core.setFailed(JSON.stringify(error));
}