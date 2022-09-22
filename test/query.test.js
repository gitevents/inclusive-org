/* eslint-disable node/no-unpublished-import */
import tap from 'tap'
import query from '../src/lib/gh-query.js'

const core = {
  info: () => {}
}

tap.test('query() should return a list of users', async (t) => {
  const emptyResult = {
    repository: {
      issues: {
        nodes: []
      },
      discussions: {
        nodes: []
      }
    }
  }

  const actual = await query(
    {
      graphql: async () => {
        return Promise.resolve(emptyResult)
      }
    },
    'hello',
    'world',
    core
  )
  t.same(actual, [])
})
