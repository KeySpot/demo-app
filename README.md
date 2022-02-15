# demo-app
Simple demo app that can display web-server environment variables in the browser. Built as a simple showcase for the KeySpot cli tool.

# How to run
Make sure npm is installed on your machine and while in the main directory simply run:
```bash
npm install
```
to install all dependencies.

Then run:
```bash
node index.js
```
to run the web server.

You can also run this same command using the KeySpot CLI:
```bash
keyspot run "npm install" -r <record-name>
```

# Navigating to ```localhost:<PORT>``` in a web browser will take you to the mini app. Here you can type in and add names of environment variables you want the server to expose.
