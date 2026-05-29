const Note =
  require("../models/Note");

const getNotes =
  async (req, res) => {
    const notes =
      await Note.find({
        user: req.user._id,
      }).sort({
        createdAt: -1,
      });

    res.json(notes);
  };

const createNote =
  async (req, res) => {
    const note =
      await Note.create({
        user: req.user._id,

        text: req.body.text,
      });

    res.status(201).json(
      note
    );
  };

module.exports = {
  getNotes,
  createNote,
};