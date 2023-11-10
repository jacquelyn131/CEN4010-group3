const NodeRSA = require('node-rsa');
const base64 = require('base64-js');


const pub_key_txt = 'insert public key'; //insert the public key generated by the generatePublicPrivateKeys.js
const pri_key_txt = 'insert private key'; //insert the private key generated by the generatePublicPrivateKeys.js

// Creating RSA key instances from the provided key strings
const public_key = new NodeRSA(pub_key_txt);
const private_key = new NodeRSA(pri_key_txt);

//function: encrypt message using public key
function encrypt(publicKey, msg) {
  //encode the message as a buffer
  const msgBuffer = Buffer.from(msg, 'utf-8');

  //encrypting message with public key, convert to base64
  const encrypted = publicKey.encrypt(msgBuffer, 'base64');

  return encrypted;
}

//encrypting the message with the public key
const encryptedMessage = encrypt(public_key, 'Secret message');
console.log(encryptedMessage);

//function: decrypt an encrypted message with private key
function decrypt(privateKey, enMsg) {
  //decode base64-encoded encrypted message
  const encryptedBuffer = Buffer.from(enMsg, 'base64');

  //decrypting message with private key and convert to a string
  const decrypted = privateKey.decrypt(encryptedBuffer).toString('utf-8');

  return decrypted;
}

//decrypting the encrypted message with private key
const decryptedMessage = decrypt(private_key, encryptedMessage);
console.log(decryptedMessage);