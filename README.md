# User Name Validation

The application allows to check if user name complies with the convention. This convention takes the form of: [letter]-[letter]-[number]-[number]-[letter]-[letter].

The application is written using technologies such:
* ReactJS
* Node.js
* Express

## Installation

Use the npm install command to install all the dependencies.

```bash
npm install 
```

Then use npm start both in api (to run the server) and validation-app (to run the application).

```bash
npm start 
```

## Usage

To validate your username, enter your username in the text box, and then click the button VALIDATE.


## What actually works in my app
The validation works on client side. It console log 'ok' if user pass the correct user name and 'wrong' if the username doesn't compile the convention.

## What I didn't manage to do
1. I had some troubles with CORS because API layer and front-end layer are on two different ports. I've tried installing cors package (as well as adding 'Access-Allow-Control-Origin' headers) but unfortunatelly none of those helped me fix the problem. 
[Moesif Origin](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) Chrome extension fixed the problem but I believe it's not the best solution...
2. Front-end layer doesn't pass data about user name to backend. 

## How would I fix it?
Next time I would run the application and the server on one port to avoid multiple port conflicts.
