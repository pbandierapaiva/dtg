console.log('importando o mariaDB');
const mariadb = require('mariadb');
console.log('criando constante de conexão');
const pool = mariadb.createPool({
     host: 'db1.bioinfo.unifesp.br', 
     user:'dtg', 
     password: 'dtg21disepm',
     connectionLimit: 5
});
console.log('iniciando teste');
asyncFunction();
console.log('finalizando teste');

async function asyncFunction() {
  let conn;
    try {
        console.log('iniciando conexão');
        conn = await pool.getConnection();
        
        //console.log('fazendo o select');
        //const rows = await conn.query("SELECT * from histo_ntg");        
        //console.log(rows); //[ {val: 1}, meta: ... ]        
        console.log('fazendo o insert');
	    const res = await conn.query("INSERT INTO histo_ntg value (?, ?)", [1, "MI diagnosticada por HTA"]);
        console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
        console.log('fazendo o select denovo');
        const rows2 = await conn.query("SELECT * from histo_ntg");        
        console.log(rows2); //[ {val: 1}, meta: ... ]     

    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}