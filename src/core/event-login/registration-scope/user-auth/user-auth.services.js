const bcrypt = require("bcrypt");
const UserSchema = require("../user/user.schema");

async function setHashToPassWd(txtPassWdIn) {
  const hashPassOut = await bcrypt.hash(txtPassWdIn, 13);
  return hashPassOut;
}

async function checkEmailAndPasswdIsValid(hassPassData, emailData) {
  //CHECK PHASE 1 --------------------------------------------------------------
  const query = UserSchema.findOne({ email: emailData });
  const user = await query.exec();

  if (!user) {
    return false;
  }

  //CHECK PHASE 2 --------------------------------------------------------------
  const isAPasswdValid = await bcrypt.compare(hassPassData, user.password);

  if (!isAPasswdValid) {
    return false;
  }

  //CHECK PHASE 3 --------------------------------------------------------------
  return user;
}

module.exports = { setHashToPassWd, checkEmailAndPasswdIsValid };
