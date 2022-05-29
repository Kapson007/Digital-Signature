# Digital Signature app
This app was created to show in action digital signature using RSA algorithm.
When the user type a message and try to send he/she get two keys from server: private and public. Then app encrypt hash of message using sha3-256 and RSA algortihm with private key. Message with public key and encrypted hash. The receiver get a package of data and then do some actions:
 - make new hash from received message
 - decipher encrypted hash with RSA and public key
 - check identity of two hashes and send result of result to user
## Get started and installation
The app is written in: `Express.js` using `node-rsa` & `js-sha3`.
To get started with app you have to:
 - download the repo
 - open terminal and install dependencies using `npm install`
 - then run the server using `npm run nodemon`
 - open the app in browser using `http://localhost:3000`
