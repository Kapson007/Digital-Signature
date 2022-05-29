const NODERSA = require('node-rsa')
const { sha3_256 } = require('js-sha3');

const checkSignature = ({message, PUBLIC_KEY, encrypted}) =>{
    const checkHash = sha3_256(message)
    const receiver = new NODERSA(PUBLIC_KEY)
    const decrypted = receiver.decryptPublic(encrypted, 'utf8')
    console.log(`Decrypted: ${decrypted}`);
    return checkHash === decrypted
}

module.exports = {
    verifySignature: checkSignature
}