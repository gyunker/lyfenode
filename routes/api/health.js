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

    const { weight, workout, drink, sleep } = req.body;

    if (!weight && !workout && !drink && !sleep) {
      return res.status(400).json({ success: false });
    }

    const fields = { weight, sleep, workout, drink }

    for (const [ sampleField, sampleValue ] of Object.entries(fields)) {
      if (!sampleValue) continue;

      await Health.insertMany([{ user: req.user.id, sampleField, sampleValue }]);
    }

    res.json({ success: true });
  }
);

router.get(
  "/chart/:sampleField",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (!req.user) {
      return res.status(401).json({ success: false });
    }

    const { sampleField } = req.params

    const sampleValues = (await Health.find({ sampleField }).sort({ date: 'desc' }).limit(20)).reverse();

    res.json(sampleValues)
  }
);

module.exports = router;