const mongoose = require("mongoose");
const { Schema } = mongoose;

const artistSchema = new Schema({
  firstName: String,
  lastName: String,
  artField: String,
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
    },
  ],
});

module.exports = artistSchema;
