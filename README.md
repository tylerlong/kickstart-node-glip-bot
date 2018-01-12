# kickstart-node-glip-bot

{{ description }}


## Setup

```
yarn install

cd messages
cp env.sample.yml env.yml
edit env.yml
```


## Deploy

### Full deploy

    yarn deploy:full

### Quick deploy

    yarn deploy


## Service information

    yarn run info


## Log information

    yarn run log

Or check log in realtime:

    yarn run log:stream


## What if found a bug in production?

- change `serverless.yml` stage to `dev`
- fix the bug.
- change `serverless.yml` stage to `production`
