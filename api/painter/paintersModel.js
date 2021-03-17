const mongoose = require("mongoose");
const { Schema } = mongoose;
const artistSchema = require("../artist/artistSchema");

const PainterSchema = new Schema(
  artistSchema
);

module.exports = mongoose.model("Painter", PainterSchema);
