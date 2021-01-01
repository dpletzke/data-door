const fs = require('fs');
const readline = require('readline');
const expat = require('node-expat')
const parser = new expat.Parser('UTF-8')

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

// parser.on('startElement', function (name, attrs) {
//   console.log(name, attrs)
// })

// parser.on('endElement', function (name) {
//   console.log(name)
// })

// parser.on('text', function (text) {
//   console.log(text)
// })

// parser.on('error', function (error) {
//   console.error(error)
// })

// parser.write('<html><head><title>Hello World</title></head><body><p>Foobar</p></body></html>')

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

// fs.readFile(pathLegends, (err, data) => {
//   const str = iconv.decode(data, 'CP437')
//   const json = parser.toJson(str);
//   const { df_world } = JSON.parse(json);
//   const { historical_event } = df_world.historical_events;
//   // console.log(Object.keys(df_world));
//   console.log(historical_event[historical_event.length - 1]);
// });

// fs.readFile(pathBigLegends, (err, data) => {
//   const str = iconv.decode(data, 'CP437')
//   const json = parser.toJson(str);
//   const { df_world } = JSON.parse(json);
//   const { historical_event } = df_world.historical_events;
//   // console.log(Object.keys(df_world));
//   console.log(historical_event[2000]);
// });