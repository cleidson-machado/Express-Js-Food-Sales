const PizzaSalesOrderSchema = require("./pizza-sales-order.schema");

//METHOD findAllOrders ------------------------------------------------ TODO!
function findAll() {
  //### TEST01
  //return PizzaSalesOrderSchema.find({}, { users: buyer_id, pizza_id: false });
  //return PizzaSalesOrderSchema.find({}, { users: buyer_id, pizza_id: true });

  //### TEST02
  //https://masteringjs.io/tutorials/mongoose/find-certain-fields
  //return PizzaSalesOrderSchema.find({}).select("buyer_id pizza_id");

  //### TEST03-STUDY
  //https://www.mongodb.com/docs/manual/data-modeling/concepts/embedding-vs-references/

  //### TEST04-STUDY
  //https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/#mongodb-pipeline-pipe.-lookup

  // ### TEST05-STUDY / How to use it!?
  //return PizzaSalesOrderSchema.aggregate();

  return PizzaSalesOrderSchema.find();
}

//METHOD findOrderById ------------------------------------------------ TODO!
function findById(id) {
  return PizzaSalesOrderSchema.findById(id);
}

//METHOD createOrder -------------------------------------------------- TODO!
function create(payload) {
  //ANTES DE CRIAR, BUSCA NO SCHEMA DE USUÁRIOS... SE ENCONTRA ID... COPIA OS DADOS PARA O NOVO DOC DA VENDA...
  //REFORMULA O PizzaSalesOrderSchema PARA..
  //PASSAR DA MANEIRA SIMPLES O ID... DE COMPRADOR E DA PIZZA

  return PizzaSalesOrderSchema.create(payload);
}

//METHOD updateOrderById ---------------------------------------------- TODO!
function updateById(id, payload) {
  return PizzaSalesOrderSchema.findByIdAndUpdate(id, payload, {
    new: true,
  });
}

//METHOD deteleOrderById ---------------------------------------------- TODO!
function deteleById(id) {
  return PizzaSalesOrderSchema.findByIdAndDelete(id);
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deteleById,
};
