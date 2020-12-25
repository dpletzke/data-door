const fs = require('fs');
const parser = require('xml2json');

fs.readFile( './fixtures/region1-00588-01-01-legends_plus.xml', function(err, data) {
    const json = parser.toJson(data);
    console.log(JSON.parse(json));
 });