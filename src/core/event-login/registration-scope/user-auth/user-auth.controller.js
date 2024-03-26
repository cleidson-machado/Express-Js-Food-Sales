const { checkEmailAndPasswdIsValid } = require("./user-auth.services");
const jwt = require("jsonwebtoken");

async function verifyLogin(req, res) {
  try {
    const _email = req.body.email;
    const _password = req.body.password;

    const user = await checkEmailAndPasswdIsValid(_password, _email);

    if (user == false) {
      return res.status(401).json({ message: "Email or Password NOT Found!" });
    }

    //TOKEN GENERATOR! ---------------------------------------------------------------
    const token = jwt.sign({ id: user }, process.env.KEYSECRET, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });
    //END TOKEN GENERATOR! -----------------------------------------------------------

    return res.status(200).json({ user, token });
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

//METHOD -------------------------------------------- OK!
async function verifyToken(req, res) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, message: "The Token not was send!" }); //EMPTY TOKEN SEND
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
      return res
        .status(401)
        .json({ success: false, message: "The Token is Invalid!" }); //SPLIT !== 2 ON TOKEN TRING CHANIN
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res
        .status(401)
        .json({ success: false, message: "The Token is Badly Formatted!" }); //TOKEN PREFIX !== Bearer
    }

    jwt.verify(token, process.env.KEYSECRET, (err, dataToken) => {
      //HERE WHEN THE TOKEN STRING CHAIN IS CHANGED
      if (err) {
        console.log("ERROR for Token Send: " + err);
        return res.status(500).json({
          success: false,
          message: "Internal ERROR when process The Token!",
          err,
        });
      }

      res.status(200).json(dataToken);
    });
  } catch (err) {
    console.log(`Error MSN: ` + err);
    res.status(500).json({ message: `An Error Has Occurred:  ${err}` });
  }
}

module.exports = { verifyLogin, verifyToken };
