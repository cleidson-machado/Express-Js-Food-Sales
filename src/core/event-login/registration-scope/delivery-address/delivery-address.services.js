const DeliveryaddressSchema = require("./delivery-address.schema");

//METHOD findAllPizzas ----------------------------------------------- TODO!
function findAll() {
  return DeliveryaddressSchema.find();
}

//METHOD findPizzaById ----------------------------------------------- TODO!
function findById(id) {
  return DeliveryaddressSchema.findById(id);
}

//METHOD createPizza ------------------------------------------------ TODO!
function create(payload) {
  return DeliveryaddressSchema.create(payload);
}

//METHOD updatePizzaById -------------------------------------------- TODO!
function updateById(id, payload) {
  return DeliveryaddressSchema.findByIdAndUpdate(id, payload, { new: true });
}

//METHOD detelePizzaById ------------------------------------------- TODO!
function deteleById(id) {
  return DeliveryaddressSchema.findByIdAndDelete(id);
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deteleById,
};
