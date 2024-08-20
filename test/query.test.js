import { test } from 'node:test'
import assert from 'node:assert'
import query from '../src/lib/gh-query.js'

const core = {
  info: () => {}
}

test('query() should return a list of users', async () => {
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
  assert.deepEqual(actual, [])
})
