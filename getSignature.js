const NODERSA = require('node-rsa')
const { sha3_256 } = require('js-sha3');


const getSignature = (message = "")=>{
    const hash = sha3_256(message)
    console.log(`${message}`);
    console.log("Hash: ",hash);
    const key = new NODERSA({b: 512})
    const private = key.exportKey('private')
    const public = key.exportKey('public')
    // console.log(public.);
    const encrypt = key.encryptPrivate(hash, 'base64')
    console.log("Encrypt: ",encrypt);
    const userSignature = {
        message: message,
        hash: hash, 
        encrypted: encrypt,
        PUBLIC_KEY: public,
        PRIVATE_KEY: private
    }
    return userSignature
}

module.exports = {
    getSignature: getSignature
}
