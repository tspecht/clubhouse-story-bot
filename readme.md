# Clubhouse Ticket Bot

This is a small Bot created using [Botkit.ai](https://botkit.ai) that listenes for new slash commands or @mentions to create tickets in a predefined Clubhouse project.


[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Installation

### 1. Create a Slack Application

Add a new Bot user following the steps in [this Slack Help Center article.](https://slack.com/help/articles/115005265703-Create-a-bot-for-your-workspace).

The bot currently supports
* [Slash Commands](https://api.slack.com/interactivity/slash-commands)
* Direct @mentions of the bot user you created
* Direct Messages to the bot user

### 2. Generate a Clubhouse API Token

Generate a Clubhouse API token following the steps in [this Clubhouse Help Center article.](https://help.clubhouse.io/hc/en-us/articles/205701199-Clubhouse-API-Tokens). This token will later be used to authenticate with the Clubhouse API and be used as the creator for the Stories.

### 3. Configure credentials

In order for the Bot to be able to authenticate against the different APIs, you will need to configure a set of credentials & token:

* `CLUBHOUSE_TOKEN` (Clubhouse)
* `CLUBHOUSE_PROJECT_ID` (Clubhouse)
* `BOT_TOKEN` (Slack)
* `CLIENT_ID` (Slack)
* `CLIENT_SECRET` (Slack)
* `CLIENT_SIGNING_SECRET` (Slack)
* `VERIFICATION_TOKEN` (Slack)

By default, these values are read from the environment you are running the application in. If you want to specify the values in a separate `.env` file, copy `.env.dist` to `.env` and fill in the appropriate values.

### 5. Run it!

To install all dependencies, run `npm install`.

Run the app by calling `npm run serve` if you want to build & run the app at the same time, or first `npm build` to run the Babel build followed by `npm start` to start the server.

## Development
The bot can be fully customized by altering the code in `src/features/slack_features.js`. Once you saved your changes, make sure to wipe the build folder `./build` or simply run `npm run serve` to rebuild & run the server again.