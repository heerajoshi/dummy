const fs = require('fs');
const readline = require('readline');

const { Client } = require('pg');

var connectionString = 'url'
const client = new Client({
  connectionString: connectionString
});
client.connect().then(ok=>{console.log("ok connection done")});

// const data  =fs.readFileSync('./WikiMatrix.en-hi.txt', 'utf8').split('\n');
const data  =fs.readFileSync('./query.txt', 'utf8');

client.query(`${data}`).then(result=>console.log(result)).then(e=>console.log(e)).then(() => client.end());

