const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomDetailsSchema = new Schema({
  room_no: {
    type: Number,
    required: true,
  },
  number_of_seats: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  room_status: {
    type: String,
    minLength: 5,
    maxLength: 250,
    required: true,
  },
  amenities: {
    type: String,
    minLength: 5,
    maxLength: 250,
    required: true,
  },
});

const roomDetailsModel = mongoose.model(
  "roomDetailsModel",
  roomDetailsSchema,
  "roomDetails"
);
module.exports = roomDetailsModel;
