import * as core from '@actions/core';
import * as github from '@actions/github';

const Environments = {
  CERT: 'CERT',
  PROD: 'PROD'
}

try {
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`[BCP-BV] The event payload: ${payload}`);

  const context = JSON.stringify(github.context, undefined, 2)
  console.log(`[BCP-BV] The context: ${context}`);

  const branchName = core.getInput('environment');
  if (branchName === Environments.CERT) {
    if (github.context.eventName !== 'pull_request')
      core.setFailed('[BCP-BV] Environment is CERT, require Pull Request');
  }

  if (branchName === Environments.PROD) {
    const rc = core.getInput('rc');
  }

} catch (error) {
  core.setFailed(JSON.stringify(error));
}