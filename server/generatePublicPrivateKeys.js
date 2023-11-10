//import NodeRSA library to handle the RSA key generation
import NodeRSA from 'node-rsa';

function generateKeys() {
  //modulus length of 256*4 bits for RSA key pair
  const modulusLength = 256 * 4;

  //instance with the specified modulus length, creating a new RSA key pair
  const key = new NodeRSA({ b: modulusLength });
  const private_key = key.exportKey('private'); //export private key as string
  const public_key = key.exportKey('public'); //export public key as string

  return { private_key, public_key }; //generated key pair returns as object
}

//call generateKeys function to get the key pair
const { private_key, public_key } = generateKeys();

//log the private and public key into the console
console.log(private_key, '\n\n\n', public_key);