const mongoose = require("mongoose");
const { Schema } = mongoose;

const artistSchema = new Schema({
  firstName: String,
  lastName: String,
  profileImg: String,
  artField: [String],
  yearsActive: {
    from: String,
    until: String,
  },
  about: String,
  famousWorks: [
    {
      title: String,
      year: String,
      url: String,
      info: String,
    },
  ],
});

module.exports = artistSchema;
