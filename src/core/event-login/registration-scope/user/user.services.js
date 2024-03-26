const UserSchema = require("./user.schema");

//METHOD findAllPizzas ----------------------------------------------- TODO!
async function findAll() {
  return await UserSchema.find();
}

//METHOD findPizzaById ----------------------------------------------- TODO!
function findById(id) {
  return UserSchema.findById(id);
}

//METHOD findByIdForMiddleWare ----------------------------------------------- TODO!
async function findByIdForMiddleWare(id) {
  return await UserSchema.findById(id);
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
  findByIdForMiddleWare,
  create,
  updateById,
  deteleById,
};
