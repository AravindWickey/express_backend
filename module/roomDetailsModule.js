const mongo = require('../shared/connect');
const roomDetailsVar = require("../models/roomDetailsModel");
const { ObjectId } = require("bson");

module.exports.getroomDetails = async (req, res, next) => {
  try {
    var data = await roomDetailsVar.find().toArray();
    res.send(data);
  } catch {
    console.log(err);
    res.status(500).send(err);
  }
};

