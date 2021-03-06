const express = require("express");
const {listPainters, createPainter} = require("./paintersController");
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const painters = await listPainters();
      res.json({data: painters});
    } catch (err) {
      console.log(err)
      res.status(500).json({message: "internal server error"});
    }
  });

router
  .route("/add")
  .post(async (req, res) => {
    const {firstName, lastName, profileImg, artField, yearBorn, yearDied, about, period, styles, selectedWorks} = req.body;
    
    try {
      const newPainter = {
        firstName,
        lastName,
        profileImg,
        artField,
        yearBorn,
        yearDied,
        about,
        period,
        styles,
        selectedWorks,
      };

      const painter = await createPainter(newPainter);
      res.json({data: painter});
    } catch (err) {
      console.log(err);
      res.status(500).json({message: "internal server error"});
    }
  });

module.exports = router;