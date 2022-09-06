import core from '@actions/core'
import github from '@actions/github'
import { Octokit } from '@octokit/rest'
import { createAppAuth } from '@octokit/auth-app'
import invite from './lib/gh-invite.js'

async function run() {
  core.info('Starting GitEvents Inclusive Org ...')

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

  const octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: appId,
      privateKey: appPrivateKey,
      installationId: appInstallationId
    }
  })
  const context = github.context

  const { data: appUser } = await octokit.rest.apps.getAuthenticated()
  const botUser = `${appUser.slug}[bot]`

  context.botUser = botUser

  await invite(octokit, context, core)
}

run()
