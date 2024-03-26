const PizzaSchema = require("./pizza.schema");

//METHOD findAllPizzas ----------------------------------------------- TODO!
function findAll() {
  return PizzaSchema.find();
}

//METHOD findPizzaById ----------------------------------------------- TODO!
function findById(id) {
  return PizzaSchema.findById(id);
}

//METHOD createPizza ------------------------------------------------ TODO!
function create(payload) {
  return PizzaSchema.create(payload);
}

//METHOD updatePizzaById -------------------------------------------- TODO!
function updateById(id, payload) {
  return PizzaSchema.findByIdAndUpdate(id, payload, { new: true });
}

//METHOD detelePizzaById ------------------------------------------- TODO!
function deteleById(id) {
  return PizzaSchema.findByIdAndDelete(id);
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deteleById,
};
