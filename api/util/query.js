const OP = {
  EQ: '$eq',
  NE: '$neq',
  GE: '$ge',
  GT: '$gt',
  LE: '$le',
  LT: '$lt',
  MT: '$match',

  AND: '$and',
  OR: '$or',
  NOT: '$not',
}

function queryToMongoDB(query) {
  let mq = {};
  // console.log(query);
  // console.log(query.op);
  switch (query.op) {
    case OP.EQ:
    case OP.GT:
    case OP.GE:
    case OP.LT:
    case OP.LE:
    case OP.MT:
      mq = atomQueryToMongoDB(query);
      break;
    case OP.AND:
      for (let q of query.queries) {
        let mqTmp = queryToMongoDB(q);
        for (let k in mqTmp) {
          if (mq[k] == undefined) {
            mq[k] = mqTmp[k];
          } else {
            mq[k] = {...mq[k], ...mqTmp[k]};
          }
        }
      }
      break;
    case OP.OR:
      mq['$or'] = query.queries.map(q => queryToMongoDB(q));
      break;
    default:
      throw Error('not supported operation: ' + query.op);
  }
  // console.log(mq);
  return mq;
}

function atomQueryToMongoDB(query) {
  // console.log(query);

  const fl = query.field.toLowerCase();
  // console.log(fl);

  if (fl == 'keywords' ) {
    return listQueryToMongoDB(query);
  } else if (fl == 'authors') {
    return authorsQueryToMongoDB(query);
  }

  return binOpToMongoDB(query);
}

function authorsQueryToMongoDB(query) {
  const mq = {};
  let em;
  let firstName, lastName;

  switch (query.op) {
    case OP.EQ:
      [firstName, lastName] = query.value.split(/\s+/);
      em = {firstName: firstName, lastName: lastName};
      break;
    case OP.MT:
      [firstName, lastName] = query.value.split(/\s+/);
      if (lastName == null) {
        lastName = firstName;
      }

      em = {$or: [
        {
          firstName: {$regex: firstName, $options: 'i'}
        },
        {
          lastName: {$regex: lastName, $options: 'i'}
        }
      ]};
      break;
  }
  // console.log(JSON.stringify(em));
  mq[query.field] = {$elemMatch: em};
  return mq;
}

function listQueryToMongoDB(query) {
  const mq = {};
  let em;

  switch (query.op) {
    case OP.MT:
      em = {$regex: query.value, $options: 'i'}
      break;
    case OP.EQ:
      em = query.value
      break;
    default:
      throw Error(`not supported operation {query.op} in field {query.field}`)
  }

  mq[query.field] = {$elemMatch: em};
  return mq;
}

function binOpToMongoDB(query) {
  // console.log(query);

  const mq = {};
  let qv;
  switch (query.op) {
    case OP.EQ:
      qv = query.value;
      break;
    case OP.MT:
      qv = {'$regex': query.value, '$options': 'i'};
      break;
    case OP.NE:
      qv = {'$not': query.value};
      break;
    case OP.GT:
      qv = {'$gt': query.value};
      break;
    case OP.GE:
      qv = {'$gte': query.value};
      break;
    case OP.LT:
      qv = {'$lt': query.value};
      break;
    case OP.LE:
      qv = {'$lte': query.value};
      break;
  }
  // console.log(qv);

  mq[query.field] = qv;
                          
  return mq;
}

module.exports = {
  queryToMongoDB
}