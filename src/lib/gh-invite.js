export default async function (github, owner, user, core) {
  core.info('Checking membership and invitation status...')

  try {
    await github.orgs.getMembershipForUser({
      org: owner,
      username: user.login
    })
  } catch (err) {
    if (err.status === 404) {
      await github.orgs.createInvitation({
        org: owner,
        invitee_id: user.id
      })
    }
  }
}
