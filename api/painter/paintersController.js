const Painters = require("./paintersModel");

exports.listPainters = async () => {
  try {
    const painters = await Painters.find();
    return painters;
  } catch (err) {
    throw err;
  }
};

exports.createPainter = async (data) => {
  try {
    const newPainter = new Painters(data);
    const painter = await newPainter.save();
    return painter;
  } catch (err) {
    throw err
  }
};
