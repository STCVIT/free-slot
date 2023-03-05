const link = (req, res, next) => {
  var { v4: uuidv4 } = require("uuid");
  var randomID = uuidv4();

  const url =
    req.body.domain +
    "/login/?uid=" +
    randomID +
    "&teamName=" +
    req.body.team_name.split(" ").join("_") +
    "&linkMaker=" +
    req.body.linkMaker;
  res.status(200).send(url);
};
module.exports = { link };
