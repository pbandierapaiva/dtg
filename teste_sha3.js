const { SHA3 } = require('sha3');

const hash = new SHA3(224);
senha = 'teste'

console.log(hash.update(senha).digest('hex'))
