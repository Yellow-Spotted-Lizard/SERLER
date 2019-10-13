const OP = {
  EQ: '$eq',
  GE: '$ge',
  LE: '$le',
  AND: '$and',
  MATCH: '$match',
}

const queryProto = {};

queryProto.setOp = function (op) {
  if (this.op == op) {
    return this;
  }

  this.op = op;
  switch (op) {
    case OP.EQ:
    case OP.GE:
    case OP.LE:
    case OP.MATCH:
      Object.setPrototypeOf(this, atomQueryProto);
      break;
    case OP.AND:
      Object.setPrototypeOf(this, combQueryProto);
      break;
    default:
      Object.setPrototypeOf(this, atomQueryProto);
  }
  return this;
}

function createQuery(op) {
  return Object.create(queryProto);
}

const atomQueryProto = Object.create(queryProto);

atomQueryProto.setField = function (f) {
  this.field = f;
  return this;
}

atomQueryProto.setValue = function (v) {
  // console.debug(this)
  this.value = v;
  // console.debug(this)
  return this;
}

const combQueryProto = Object.create(queryProto);

combQueryProto.getQuery = function (i) {
  if (!this.queries) {
    this.queries = [];
  }

  if (!this.queries[i]) {
    this.queries[i] = createQuery();
  }

  return this.queries[i];
}

export {
  createQuery,
  OP,
}