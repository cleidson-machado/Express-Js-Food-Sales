const deliveryAddressService = require("./delivery-address.services");

//METHOD findAll ------------------------------------------------ TODO!
async function findAll(req, res) {
  try {
    return res.status(200).json(await deliveryAddressService.findAll());
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
      .json(await deliveryAddressService.findById(req.params.id));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD createOne ---------------------------------------------- TODO!
async function createOne(req, res) {
  try {
    const addressData = {
      ...req.body,
    };
    return res
      .status(200)
      .json(await deliveryAddressService.create(addressData));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD updateOne ---------------------------------------------- TODO!
async function updateOne(req, res) {
  try {
    const addressData = {
      ...req.body,
    };
    return res
      .status(200)
      .json(
        await deliveryAddressService.updateById(req.params.id, addressData)
      );
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
      .json(await deliveryAddressService.deteleById(req.params.id));
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
