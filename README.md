# Digital Signature app

This app was created to show in action digital signature using RSA algorithm. User can sign own message before sending to confrim an autorship of file.
When the user type a message and try to send he/she get two keys from server: private and public. Then app encrypt hash of message using sha3-256 (hashing message before encryption) and RSA algortihm with private key. Message with public key and encrypted hash. The receiver get a package of data and then do some actions:
 - make new hash from received message
 - decipher encrypted hash with RSA and public key - validation of signature
 - check identity of two hashes and send feedback of verification to the user
App can simulate case of the interception of the message and get back information about bad signature and probability of interception. All you have to do is click radio button to intercept message during forwarding to the server.

## Get started and installation
The app is written in: `Express.js` using `node-rsa` & `js-sha3`. Responses from server are templates written in `ejs`.
To get started with app you have to:
 - download the repo
 - open terminal and install dependencies using `npm install`
 - then run the server using `npm run nodemon` - server will send some logs about your keys and hash through the terminal
 - open the app in browser using `http://localhost:3000`, type your message, generate key and send to a receiver.

