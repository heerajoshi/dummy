const fs =require('fs')

const data  = fs.readFileSync('./odia1.txt', 'utf8').split('\n');
//for all data
// const result = data.map(x=> `('${x}')`)
// for kids data
const result = data.map(x=> `('${x}','medium','Odia')`)

// console.log(result.length)
//for all data
// const query = 'Insert into sentences (sentence) values ' + result
const query = 'Insert into sentences (sentence,label,language) values ' + result


fs.writeFileSync('./query.txt', query)