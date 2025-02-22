const bug = require("../models/bugForm");
const report = require("../models/reportForm");

const bugForm = async (req, res) => {
  try {
    const form = new bug(req.body);
    await form.save();
    res.status(201).json({ form });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const reportForm = async (req, res) => {
  try {
    const form = new report(req.body);
    await form.save();
    res.status(201).json({ form });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  bugForm,
  reportForm,
};
