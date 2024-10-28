
# Relay Example

![Image](picnic.png?raw=true "Title")

This is an example of using a relay server to allow the avatar to modify the page it is embedded in.

This approach is just an example and does not consider security. Do not use in production.

## Overview

* We use an inventory file to allow the avatar to maintain state
* We use a sessionid to tie the avatar chat session to the embedding page
* On the embedding site we add a sessionId parameter to the iframe url
* The sessionid is available as a Mil code variable in the prompt
* The embedding page connects to an SSE endpoint on the Node server and sends the same sessionId
* On each turn we call WEB_SEND to Post the file contents to a Node.js web server along with the sessionID
* The sessionid is used to route the message to the correct client.
* Javascript running on the client receieves the SSE message and updates the page.

## Setup
Create a new Avatar with the included prompt and inventory file

Publish the Avatar

Get the embed link and take the orgid and slot id, replace the values in index.html (around line 180)

## Relay Server

install nodejs 22+
https://nodejs.org/en

Install dependencies & run the server
```
npm i
node server.js
```

Browse to 
http://localhost:5009



