const fs = require('fs');
const readline = require('readline');
const iconv = require('iconv-lite');
const parser = require('xml2json');

const { schemaBuilder } = require('./schemaBuilder');

const pathLegends = './src/db/fixtures/region1-00076-01-01-legends.xml';  
const pathBigLegends = './src/db/fixtures/region1-00588-01-01-legends.xml';  
const pathPlus = './src/db/fixtures/region1-00076-01-01-legends_plus.xml';
const pathTestXML = './src/db/fixtures/test.xml';  
const pathTestJSON = './src/db/fixtures/test.json';  

// const rl = readline.createInterface({
//   input: fs.createReadStream(pathTestXML),
//   output: process.stdout,
//   terminal: false
// });



// let firstLine = '';
// let entry;
// const eachEntry = []; 
// let collecting = false;

// rl.on('line', (line) => {
//   if(!firstLine) firstLine = line;
//   if(line.charAt(3) === '<') {
//     if(collecting) {
//       entry += `${line}\n`;
//       eachEntry.push(`${firstLine}\n ${entry}`);
//       entry = '';
//       collecting = false;
//     } else {
//       collecting = true;
//     }
//   }

//   if(collecting) {
//     entry += `${line}\n`;
//   }
// })

// rl.on('close', () => {
//   const num = 10;
//   console.log(eachEntry[num]);
//   const json = parser.toJson(eachEntry[num]);
//   console.log(JSON.parse(json));
// })




// fs.readFile(pathTestJSON, (err, data) => {
//   console.log(JSON.parse(data));
// });

// fs.readFile(pathTestXML, (err, data) => {
//   // console.log(data);
//   const json = parser.toJson(data);
//   console.log(JSON.parse(json));
// });

// fs.readFile(pathPlus,'utf8', (err, data) => {
//   const json = parser.toJson(data);
//   console.log(JSON.parse(json).df_world.entities.entity[90]);
// });

fs.readFile(pathLegends, (err, data) => {
  const str = iconv.decode(data, 'CP437')
  const json = parser.toJson(str);
  const { df_world } = JSON.parse(json);
  console.log(schemaBuilder(df_world));
  // schemaBuilder(df_world);
});

// fs.readFile(pathBigLegends, (err, data) => {
//   const str = iconv.decode(data, 'CP437')
//   const json = parser.toJson(str);
//   const { df_world } = JSON.parse(json);
//   const { historical_event } = df_world.historical_events;
//   // console.log(Object.keys(df_world));
//   console.log(historical_event[2000]);
// });