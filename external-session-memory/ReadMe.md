
# External Session Example

![Image](page.png?raw=true "Page")

This is an example of using a cusstom non-portalis id to enable session memory

This approach is just an example and does not consider security. Do not use in production.  
## Overview

In order to allow an external (non portalis) id to maintain Avatar memory we used a shared secret to securely pass a userid to portalis to be used for the avatar's conversation memory. You will generate the parameters required securely on your server and then add them to the embed link.

Notes:
* The Avatar must have memory enabled 
* You must provide your own authentication.
* You must not expose PORTALIS_AUTH_SHARED_SECRET to the client or anyone can access your Avatar's conversation memory


## Setup

* Get the PORTALIS_URL from the embed link in the Avatar Portal
![Image](embed.png?raw=true "Embed")

It will look like 

```
<iframe src="https://chat.portalis.ai/guest?orgId=YOUR_ORG_ID&slotId=YOUR_SLOT_ID"
 ....></iframe>
```

You just want the src part

```
export PORTALIS_URL=https://chat.portalis.ai/guest?orgId=YOUR_ORG_ID&slotId=YOUR_SLOT_ID

```

Get the PORTALIS_AUTH_SHARED_SECRET from your Portalis Admin Portal under "External Auth Shared Secret"

```
export PORTALIS_AUTH_SHARED_SECRET=YOUR_SHARED_SECRET
```

Add the local test server to your allowed origins in the Admin Portal
```
http://localhost:5009/
```

## Server

install nodejs 22+
https://nodejs.org/en

Install dependencies & run the server
```
npm i
node server.js
```

Browse to 
http://localhost:5009

* Enter a username
* Click Login
* Avatar Appears
* Connect and ask it to remember something
* Disconnect
* Repeat the process in another browser or incognito window and the Avatar will remember you




