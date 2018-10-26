const express = require("express");
const router = express.Router();
const passport = require('passport')
const Health = require('../../models/Health')

router.get("/test", (req, res) => res.json({ msg: "Health works" }));

router.post(
  "/submit",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (!req.user) {
      return res.status(401).json({ success: false });
    }

    const { weight } = req.body;

    if (!weight) {
      return res.status(400).json({ success: false });
    }

    await Health.insertMany([{ user: req.user.id, sampleField: 'weight', sampleValue: weight }]);

    res.json({ success: true });
  }
);

router.get(
  "/weight",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (!req.user) {
      return res.status(401).json({ success: false });
    }

    const weights = (await Health.find({ sampleField: 'weight' }).sort({ date: 'desc' }).limit(20)).reverse();

    res.json(weights)
  }
);

module.exports = router;
