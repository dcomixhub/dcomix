For using this prototype, you have to install node.js.

Then, launch a command prompt or terminal, and type :

`npm install -g browserify`

Once this is done, go to your directory by doing so

`cd C:/Users/.../PATH TO THE DCOMIX PROTOTYPE FOLDER/`

then :

`npm install`

and finally

`node server.js` or `npm start`


You can stop the server by doing CTRL + C


If you update the server.js/serverlib.js files, you will have to relaunch the server

If you update the client.js, you will have to rebundle it. To do so, open a console or terminal in the dcomix folder, and type :

`npm bundle` or `browserify ./assets/js/client.js -o ./assets/js/bundle.js`

Don't hesitate to contact me directly if any help is needed