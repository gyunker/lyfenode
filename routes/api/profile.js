const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//const passport = require("passport");
//const keys = require("../../config/keys")

//Load Profile model
const Profile = require("../../models/Profile");

//Load User model
const User = require("../../models/User");

router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

//@route GET api/profile/test
//@desc Get curent user's profile
//@access Private

// router.get(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     //const errors = {};
//     Profile.findOne({ user: req.user.id })
//       .then(profile => {
//         if (!profile) {
//           return res.status(404).json(errors);
//         }
//         res.json(profile);
//       })
//       .catch(err => res.status(404).json(err));
//   }
// );

module.exports = router;
