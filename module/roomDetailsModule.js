const roomDetailsVar = require("../models/roomDetailsModel");
const { ObjectId } = require("bson");

module.exports.getroomDetails = async (req, res, next) => {
  try {
    var data = await roomDetailsVar.find();
    res.send(data);
  } catch {
    console.log(err);
    res.status(500).send(err);
  }
};
