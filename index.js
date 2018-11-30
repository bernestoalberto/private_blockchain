/*let hashing = require('./hashing');
let BlockClass = require('./block.js');
const block = new BlockClass.Block('Test Block');
const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

hashing.sha(data1);
hashing.sha(dataObject);
block.generateHash().then((result)=>{
console.log(`Block Hash: ${result.hash} \n`);
console.log(`Block: ${JSON.stringify(result)} \n`);
}
).catch(
(error)=>{
console.log(error);
}
);*/
const bitcoin = require('bitcoinjs-lib');
const bitcoinMessage = require('bitcoinjs-message');

//  let pk=keypair.privateKey;

// let signature = bitcoinMessage.sign(message,pk,keypair.compressed);
// let signature1='HJLQlDWLyb1Ef8bQKEISzFbDAKctIlaqOpGbrk3YVtRsjmC61lpE5ErkPRUFtDKtx98vHFGUWl Fhsh3DiW6N0rE' ;
// let signature2='IFn36Idac3dLo3JvQ8/+AMfgQXbj9h3WIjDXJSUO+0ZbSOVEMhQK+t6RU3CC7ECvq9QshbRt LMLThDfCxa1RkYM=' ;
// let signature3='ICcppPF+jJ+9NlvssL+qfcZP9VRbcBq8Drpw91vo+Z5hHkBuLTy+9q70u+Roi03XUIIRw+x9TU5K 6FFm6Dhu718=' ;

// console.log(signature1.toString('base64')+'\n');
// console.log(signature2.toString('base64')+'\n');
// console.log(signature3.toString('base64')+'\n');

let pbk= 'L365BaHQLS84X9oDssLSzXdGoF8xbA7krJof2h7EFtHQ5n51QLi6';
 let keypair= bitcoin.ECPair.fromWIF(pbk); 
  let pk = keypair.privateKey;             
let message = '1gLZYJm812Ab18vTwYek9KwdpjLckcfZg: Udacity rocks!';

// Verify message
let address = '1gLZYJm812Ab18vTwYek9KwdpjLckcfZg' ;
// console.log(bitcoinMessage.verify(message,address,signature1)+'\n');
// 
// console.log(bitcoinMessage.verify(message,address,signature2)+'\n');



const signature = bitcoinMessage.sign(message,pk,keypair.compressed);
console.log(signature.toString('base64')+'\n');


console.log(bitcoinMessage.verify(message,address,signature)+'\n');



