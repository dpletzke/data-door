const fs = require('fs');
const parser = require('xml2json');
const iconv = require('iconv-lite');

const pathLegends = './src/db/fixtures/region1-00076-01-01-legends.xml';  
const pathBigLegends = './src/db/fixtures/region1-00588-01-01-legends.xml';  
const pathPlus = './src/db/fixtures/region1-00076-01-01-legends_plus.xml';
const pathTestXML = './src/db/fixtures/test.xml';  
const pathTestJSON = './src/db/fixtures/test.json';  


// fs.readFile(pathTestJSON, (err, data) => {
//   console.log(JSON.parse(data));
// });

// fs.readFile(pathTestXML, (err, data) => {
//   // console.log(data);
//   // const json = parser.toJson(data);
//   // console.log(JSON.parse(json));
// });

// fs.readFile(pathPlus,'utf8', (err, data) => {
//   const json = parser.toJson(data);
//   console.log(JSON.parse(json));
// });

fs.readFile(pathLegends, (err, data) => {
  const str = iconv.decode(data, 'CP437')
  const json = parser.toJson(str);
  const { df_world } = JSON.parse(json);
  const { historical_event } = df_world.historical_events;
  // console.log(Object.keys(df_world));
  console.log(historical_event[historical_event.length - 1]);
});

// fs.readFile(pathBigLegends, (err, data) => {
//   const str = iconv.decode(data, 'CP437')
//   const json = parser.toJson(str);
//   const { df_world } = JSON.parse(json);
//   const { historical_event } = df_world.historical_events;
//   // console.log(Object.keys(df_world));
//   console.log(historical_event[2000]);
// });