export default async function query(octokit, owner, repo, core) {
  core.info('Querying for reactions')

  const query = `
    query reactions($owner: String!, $repo: String!, $size: Int!) {
      repository(name: $repo, owner: $owner) {
        issues(first: $size, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            reactions(first: $size) {
              nodes {
                user {
                  databaseId
                  login
                }
              }
              totalCount
            }
          }
        }
        discussions(
          first: $size
          orderBy: { field: CREATED_AT, direction: DESC }
        ) {
          nodes {
            reactions(first: $size) {
              totalCount
              nodes {
                user {
                  databaseId
                  login
                }
              }
            }
          }
        }
      }
    }
  `

  const { repository } = await octokit.graphql(query, {
    owner: owner,
    repo: repo,
    size: 10
  })

  const users = repository.issues.nodes
    .map((i) => {
      return i.reactions.nodes
        .map((r) => {
          return { login: r.user.login, id: r.user.databaseId }
        })
        .flat()
    })
    .concat(
      repository.discussions.nodes.map((d) => {
        return d.reactions.nodes
          .map((r) => {
            return { login: r.user.login, id: r.user.databaseId }
          })
          .flat()
      })
    )
    .flat()

  const resArr = []
  users.filter(function (item) {
    var i = resArr.findIndex((x) => x.login == item.login && x.id == item.id)
    if (i <= -1) {
      resArr.push(item)
    }
    return null
  })

  return resArr
}
