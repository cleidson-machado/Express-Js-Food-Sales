const pizzaSalesOrderService = require("./pizza-sales-order.services");

//METHOD findAllPizzaSalesOrders ----------------------------------------------- TODO!
async function findAll(req, res) {
  try {
    return res.status(200).json(await pizzaSalesOrderService.findAll());
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD findPizzaSalesOrderById ----------------------------------------------- TODO!
async function findById(req, res) {
  try {
    return res
      .status(200)
      .json(await pizzaSalesOrderService.findById(req.params.id));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD createPizzaSalesOrder ----------------------------------------------- TODO!
async function createOne(req, res) {
  try {
    const pizzaSaleData = {
      ...req.body,
    };
    return res
      .status(200)
      .json(await pizzaSalesOrderService.create(pizzaSaleData));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD updatePizzaSalesOrderById ----------------------------------------------- TODO!
async function updateOne(req, res) {
  try {
    const pizzaSaleData = {
      ...req.body,
    };
    return res
      .status(200)
      .json(
        await pizzaSalesOrderService.updateById(req.params.id, pizzaSaleData)
      );
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD detelePizzaSalesOrderById ----------------------------------------------- TODO!
async function deleteOne(req, res) {
  try {
    return res
      .status(200)
      .json(await pizzaSalesOrderService.deteleById(req.params.id));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

module.exports = {
  findAll,
  findById,
  createOne,
  updateOne,
  deleteOne,
};
