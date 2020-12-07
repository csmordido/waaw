const mongoose = require("mongoose");
const { Schema } = mongoose;
const artistSchema = require("../artistSchema");

const PainterSchema = new Schema({
  artistSchema,
});

module.exports = mongoose.model("Painter", PainterSchema);
