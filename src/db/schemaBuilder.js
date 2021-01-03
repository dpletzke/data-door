const makeNumberIfPossible = (str) => {
  return isNaN(+str) ? str : +str;
}

const getType = (variable) => {
  if (Array.isArray(variable)) return 'array';
  else return typeof variable;
}

const schemaFromArray = (arr) => {

  const elementType = getType(makeNumberIfPossible(arr[0]));

  const ref = {
    string: { type: elementType },
    number: { type: elementType  },
    array: 'nested arrays shouldn\'t happen',
    object: arr.reduce((acc, entry) => {
      if (!Object.keys(entry).length) acc = 'boolean'; 
      else acc = {...acc, ...schemaFromObject(entry)};

      return acc;
    }, {})
  }

  return ref[elementType];

}

//doesn't get called often
const schemaFromObject = (obj) => {

  if (obj && !Object.keys(obj).length) {
    return 'boolean'
  }
  
  const schema = {};

  for(const column in obj) {
    if(!schema[column]) {

      const data = makeNumberIfPossible(obj[column]); 
      const type = getType(data);
      
      if (['string', 'number'].includes(type)) {
        schema[column] = type;
      } else if (type === 'array') {
        schema[column] = schemaFromArray(data);
      } else {
        schema[column] = schemaFromObject(data);
      }

    } 
  }
  return schema;
}

const schemaBuilder = (ds) => {
  const schema = {};

  for (const table in ds) {
    const singularName = Object.keys(ds[table])[0];
    const data = ds[table][singularName];

    if(Array.isArray(data)) {
      schema[table] = schemaFromArray(data);
    } else {
      schema[table] = schemaFromObject(data);
    }


  }

  return schema;
}

module.exports = { schemaBuilder }