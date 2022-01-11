const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomDetailsSchema = new Schema({});

const roomDetailsModel = mongoose.model(
  "roomDetailsModel",
  roomDetailsSchema,
  "roomDetails"
);
module.exports = roomDetailsModel;
