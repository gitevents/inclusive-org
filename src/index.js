import core from '@actions/core'
import github from '@actions/github'
import { Octokit } from '@octokit/rest'
import { createAppAuth } from '@octokit/auth-app'
import invite from './lib/gh-invite.js'
import query from './lib/gh-query.js'

async function run() {
  core.info('Starting GitEvents Inclusive Org ...')

  // for local integration testing
  // const token = process.env.GITHUB_TOKEN
  // const octokit = github.getOctokit(token)
  // const context = github.context

  const appId = core.getInput('gitevents-app-id', {
    required: true
  })
  const appPrivateKey = core.getInput('gitevents-app-private-key', {
    required: true
  })
  const appInstallationId = core.getInput('gitevents-app-installation-id', {
    required: true
  })

  core.info(
    `Running Inclusive Org with App ID ${appId} and Installation ID ${appInstallationId} ...`
  )

  const context = github.context
  const octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: appId,
      privateKey: appPrivateKey,
      installationId: appInstallationId
    }
  })
  const { data: appUser } = await octokit.rest.apps.getAuthenticated()
  const botUser = `${appUser.slug}[bot]`
  context.botUser = botUser

  const owner = process.env.GITHUB_REPOSITORY_OWNER
  const repo = process.env.GITHUB_REPOSITORY_NAME
  if (context.eventName === 'workflow_dispatch') {
    const users = await query(octokit, owner, repo, core)
    for (const user of users) {
      await invite(octokit, owner, user, core)
    }
  } else if (context.eventName === 'schedule') {
    const users = await query(octokit, owner, repo, core)
    for (const user of users) {
      await invite(octokit, owner, user, core)
    }
  } else {
    await invite(octokit, owner, context.payload.sender, core)
  }
}

run()
