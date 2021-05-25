const { SHA3 } = require('sha3');

const hash = new SHA3(224);
senha = 'admin'

console.log(hash.update(senha).digest('hex'))
