const jwt = require("jsonwebtoken");
const { findByIdForMiddleWare } = require("../user/user.services");

module.exports = async (req, res, next) => {
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
      .json({ success: false, message: "The Token is Invalid! 1" }); //SPLIT !== 2 ON TOKEN TRING CHANIN
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res
      .status(401)
      .json({ success: false, message: "The Token is Badly Formatted!" }); //TOKEN PREFIX !== Bearer
  }

  jwt.verify(token, process.env.KEYSECRET, async (err, dataToken) => {
    if (err) {
      console.log("ERROR for Token Send: " + err);
      return res.status(500).json({
        success: false,
        message: "Internal ERROR when process The Token!",
        err,
      });
    }

    const user = await findByIdForMiddleWare(dataToken.id);

    if (!user || !user.id) {
      return res
        .status(401)
        .json({ success: false, message: "The Token is Invalid! 2" });
    }

    req.userId = dataToken.id;

    return next();
  });
};
