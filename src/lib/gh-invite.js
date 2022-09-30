export default async function (github, owner, user, core) {
  core.info('Checking membership and invitation status...')

  try {
    // check failed invites
    const failedInvites = await github.rest.orgs.listFailedInvitations({
      org: owner,
      per_page: 100
    })
    const failedInvite = failedInvites.data.find((i) => i.login === user.login)
    if (failedInvite) {
      core.debug('Invitation failed')
      return
    }

    // check pending invites
    const pendingInvites = await github.rest.orgs.listPendingInvitations({
      org: owner,
      per_page: 100
    })
    const pendingInvite = pendingInvites.data.find(
      (i) => i.login === user.login
    )
    if (pendingInvite) {
      core.debug('Invitation pending')
      return
    }

    // check membership status
    const isMember = await github.rest.orgs.getMembershipForUser({
      org: owner,
      username: user.login
    })
    if (isMember) {
      return
    }

    // invite is not pending or failed, user is not a member, let's invite
    core.info('Inviting user')
    await github.rest.orgs.createInvitation({
      org: owner,
      invitee_id: user.id
    })
  } catch (err) {
    if (err.status === 404) {
      await github.rest.orgs.createInvitation({
        org: owner,
        invitee_id: user.id
      })
    }
  }
}
