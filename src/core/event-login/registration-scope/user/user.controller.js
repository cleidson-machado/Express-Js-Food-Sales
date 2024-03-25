const userService = require("./user.services");

//METHOD findAll ------------------------------------------------ TODO!
async function findAll(req, res) {
  try {
    return res.status(200).json(await userService.findAll());
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD findById ----------------------------------------------- TODO!
async function findById(req, res) {
  try {
    return res.status(200).json(await userService.findById(req.params.id));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD createOne ---------------------------------------------- TODO!
async function createOne(req, res) {
  try {
    const userData = {
      ...req.body,
    };
    return res.status(200).json(await userService.create(userData));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD updateOne ---------------------------------------------- TODO!
async function updateOne(req, res) {
  try {
    const userData = {
      ...req.body,
    };
    return res
      .status(200)
      .json(await userService.updateById(req.params.id, userData));
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD deleteOne ---------------------------------------------- TODO!
async function deleteOne(req, res) {
  try {
    return res.status(200).json(await userService.deteleById(req.params.id));
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
