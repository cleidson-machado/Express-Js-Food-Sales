const UserSchema = require("./user.schema");

//METHOD findAllPizzas ----------------------------------------------- TODO!
function findAll() {
  return UserSchema.find();
}

//METHOD findPizzaById ----------------------------------------------- TODO!
function findById(id) {
  return UserSchema.findById(id);
}

//METHOD createPizza ------------------------------------------------ TODO!
function create(payload) {
  return UserSchema.create(payload);
}

//METHOD updatePizzaById -------------------------------------------- TODO!
function updateById(id, payload) {
  return UserSchema.findByIdAndUpdate(id, payload, { new: true });
}

//METHOD detelePizzaById ------------------------------------------- TODO!
function deteleById(id) {
  return UserSchema.findByIdAndDelete(id);
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deteleById,
};
