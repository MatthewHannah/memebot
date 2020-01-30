# memebot
A client for memebot-api that plays memes in your Discord channel

## Requirements:
* node v12 LTS 
* npm
* git
* ffmpeg
* [memebot-api server](https://github.com/arjunchib/memebot-api)

## Installation
install requirements first 

```sh
git clone https://github.com/arjunchib/memebot.git
cd memebot
npm install
npm install discord.js node-opus
```
Run ``npm run develop``

## Config
Rename ``.env.example`` to ``.env``

```
COMMAND_PREFIX=!!
DISCORD_TOKEN=$(TOKEN)
MEMEBOT_API_ENDPOINT=$(ENDPOINT)
```
