const makeNumberIfPossible = (str) => {
  return isNaN(+str) ? str : +str;
}

const getType = (variable) => {
  if (Array.isArray(variable)) return 'array';
  else return typeof variable;
}

const schemaFromArray = (arr) => {
  const schema = {};
  
  return arr.reduce((acc, entry) => {
    entry = makeNumberIfPossible(entry);
    const type = getType(entry);

    if (['string', 'number'].includes(type)) {
      return { type }
    } else if (type === 'array') {
      return 'This shouldn\'t happen';
    } else if (type === 'object') {
      for(const column in entry) {
        if(!acc[column]) {

          const data = makeNumberIfPossible(entry[column]); 
          const type = getType(entry);
          
          if (['string', 'number'].includes(type)) {
            return { type }
          } else if (type === 'array') {
            acc[column] = schemaFromArray(data);
          } else {
            acc[column] = schemaFromObject(data);
          }
  
        } 
      }
    }
    return acc;
  }, {});

}

const schemaFromObject = (obj) => {
  const schema = {};

  for(const column in obj) {
    if(!schema[column]) {

      const data = makeNumberIfPossible(obj[column]); 
      const type = getType(data);
      
      if (['string', 'number'].includes(type)) {
        schema[column] = { type };
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