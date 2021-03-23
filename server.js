const express = require("express");
const app = express();
const mongoose = require("mongoose");
const paintersRouter = require("./api/painter/paintersRoutes")
const uri = 'mongodb://localhost:27017/waaw';
const PORT = '8080';

// Connect to database
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to: ${uri} `);
  })
  .catch( err => {
    console.log(err.message);
  });

app.use(express.json({extended: false}));
app.use("/api/painters", paintersRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});