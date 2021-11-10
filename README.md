# Sandu
<strong>Sandu</strong> is a discord music playing bot I've made because Groovy was ceased and desisted </br>
It has commands like: <strong><em>play,play now,skip,remove,jump and queue.</em></strong></br>
The command names and descriptions were made in romanian while under the effect of various substances so if you need any help with the translation feel free to ask me!

## How to run:
  ### Discord Developer Portal:
  - Create an application on the discord developer portal
  - Create a bot and give him administrator privillages
  - Select Bot and applications.commands in the Oauth2 menu as the scopes
  - Invite the bot to your discord server
  ### Gather the necesary tokens and ids
  - Get the bot's token from the Discord Developer Portal 
  - Get the bot's client id by right clicking him and copying its id
  - Get the server's id by right clicking it and copying its id
  - Get an Youtube API token from their website
  ### It's all comming together
  - Create a config.json file in the /src folder
  - Add the data you've gathered as follows:
  ```JSON
"token": "bot_token"
"clientId": "Client ID"
"guildId": "Guild ID"
"YToken": "Youtube API token"
```
  - Type: _node depploy-commands.js_ once
  - Type: _node index.js_
  
  ### Docker 
  - To run with docker instead of directly just build the image with _docker build_ and run it with _docker run_
