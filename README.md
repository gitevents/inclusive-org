# GitEvents Inclusive Organization

## Features

### Auto Invite

The basic idea behind "git events" is that every person who interacts with the repo becomes a member of the organization/community. By becoming a member, people get GitHub notifications from your organization, which makes it easier for organizers to reach people and promotes interaction between your community.

## Installation & Usage

Follow [GitEvents/action](https://github.com/gitevents/action/blob/main/README.md) for the setup instructions.

```yml
name: GitEvents Inclusive Organization

on:
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
        uses: gitevents/inclusive-org@v1.0.0
        with:
          gitevents-app-id: ${{ secrets.GE_APP_ID }}
          gitevents-app-private-key: ${{ secrets.GE_APP_PRIVATE_KEY }}
          gitevents-app-installation-id: ${{ secrets.GE_APP_INSTALLATION_ID }}
```

## License

Licensed under [MIT](./LICENSE).

Here is a list of all the licenses of our [production dependencies](./dist/licenses.txt)
