const PizzaMongooseModel = require("./pizza.schema");

//METHOD findAllPizzas ----------------------------------------------- TODO!
function findAllPizzas() {
  return PizzaMongooseModel.find();
}

//METHOD findPizzaById ----------------------------------------------- TODO!
function findPizzaById(id) {
  return PizzaMongooseModel.findById(id);
}

//METHOD createPizza ----------------------------------------------- TODO!
function createPizza(payload) {
  return PizzaMongooseModel.create(payload);
}

//METHOD updatePizzaById ----------------------------------------------- TODO!
function updatePizzaById(id, payload) {
  return PizzaMongooseModel.findByIdAndUpdate(id, payload, { new: true });
}

//METHOD detelePizzaById ----------------------------------------------- TODO!
function detelePizzaById(id) {
  return PizzaMongooseModel.findByIdAndDelete(id);
}

module.exports = {
  findAllPizzas,
  findPizzaById,
  createPizza,
  updatePizzaById,
  detelePizzaById,
};
