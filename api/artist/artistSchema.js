const mongoose = require("mongoose");
const { Schema } = mongoose;

const artistSchema = new Schema({
  firstName: String,
  lastName: String,
  profileImg: String,
  artField: [String],
  yearBorn: String,
  yearDied: String,
  about: String,
  period: String,
  styles: [String],
  selectedWorks: [
    {
      title: String,
      year: String,
      url: String,
      info: String,
    },
  ],
});

module.exports = artistSchema;
