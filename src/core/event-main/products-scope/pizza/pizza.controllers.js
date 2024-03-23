const pizzaService = require("./pizza.services");

//METHOD findAll ------------------------------------------------ TODO!
async function findAll(req, res) {
  try {
    return res.status(200).json(await pizzaService.findAllPizzas());
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD findById ----------------------------------------------- TODO!
async function findById(req, res) {
  try {
    return res
      .status(200)
      .json(await pizzaService.findPizzaById(req.params.id));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD createOne ---------------------------------------------- TODO!
async function createOne(req, res) {
  try {
    const pizzaData = {
      ...req.body,
    };
    return res.status(200).json(await pizzaService.createPizza(pizzaData));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD updateOne ---------------------------------------------- TODO!
async function updateOne(req, res) {
  try {
    const pizzaData = {
      ...req.body,
    };
    return res
      .status(200)
      .json(await pizzaService.updatePizzaById(req.params.id, pizzaData));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD deleteOne ---------------------------------------------- TODO!
async function deleteOne(req, res) {
  try {
    return res
      .status(200)
      .json(await pizzaService.detelePizzaById(req.params.id));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
  return res.status(200).json("TODO DeleteOne Method");
}

module.exports = {
  findAll,
  findById,
  createOne,
  updateOne,
  deleteOne,
};
