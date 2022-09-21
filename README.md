# GitEvents Inclusive Organization

## Features

### Auto Invite

The basic idea behind "gitevents" is that everyone who interacts with the
repository becomes a member of the organization/community.

This GitHub Action can be used individually or as part of the
[GitEvents Actions Suite](https://github.com/gitevents).

## Installation & Usage

Follow
[GitEvents/action](https://github.com/gitevents/action/blob/main/README.md) for
the setup instructions. We use a GitHub App to authenticate with GitHub API.

```yml
name: GitEvents Inclusive Organization

on:
  schedule:
    - cron: '0 * * * *'
  push:
  pull_request:
  discussion:
    types: [created, edited, answered]
  discussion_comment:
    types: [created]
  issue_comment:
    types: [created]
  issues:
    types: [opened]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: gitevents
        uses: gitevents/inclusive-org@v1.1.1
        with:
          gitevents-app-id: ${{ secrets.GE_APP_ID }}
          gitevents-app-private-key: ${{ secrets.GE_APP_PRIVATE_KEY }}
          gitevents-app-installation-id: ${{ secrets.GE_APP_INSTALLATION_ID }}
```

## License

Licensed under [MIT](./LICENSE).

Here is a list of all the licenses of our
[production dependencies](./dist/licenses.txt)
