![image](https://user-images.githubusercontent.com/44556736/213896697-ed840119-8b5e-492f-b8c3-6d6c2ff60075.png)

Discord bot to watch one WFC server where Bleach DS is played.

Send a message to one channel and edit it when the players list changes.

# Features
- Watch the server polling its logs data.
- Send a message to one channel.
- Remove the old message and send a new one when the data is different.
- Remove the message when there are 0 players online.

# Quick start

## Instalation
```
yarn

npm i
```

## Enviroment
- `APP_ID`: Application ID form Discord API
- `DISCORD_TOKEN`: Bot Token from Discord API.
- `PUBLIC_KEY`: Public Key from Discord API.
- `FETCH_URL`: URL to fetch the data.
- `FETCH_SLEEP`: Sleep time (ms) to fetch data.
- `TARGET_CHANNEL`: Channel ID from Discord Server.

## Run
```
yarn start
```
