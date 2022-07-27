const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "Harryisagoodb$oy";

//ROUTE 1 : create a user using : POST "/api/auth/createuser". doesnt require Auth... NO LOGIN REQ
router.post(
  "/createuser",
  [
    body("name", "Enter a Valid Name...").isLength({ min: 3 }),
    body("gender", "Gender Required..."),
    body("email", "Enter a Valid E-mail...").isEmail(),
    body("contact", "Enter a Valid Contact...").isLength({ min : 10, max : 10}),
    body("bio", "About You").isLength({ min : 10 , max : 120}),
    body("password", "password must be atleast 5 chars").isLength({ min: 6 })
  ],
  async (req, res) => {
    // If there are errors return bad requests and the errors
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    // Check weather the user exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ success, error: "Sorry User with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      securedPass = await bcrypt.hash(req.body.password, salt);

      //create a new user
      user = await User.create({
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        contact: req.body.contact,
        bio: req.body.bio,
        password: securedPass
      });
      
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;

      res.json({ success, authtoken });
      // res.json(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);


//ROUTE 2 : Authenticate a user using : POST "/api/auth/login". doesnt require Auth... NO LOGIN REQ
router.post(
  "/login",
  [
    body("email", "Enter a Valid E-mail...").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors return bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {

        success = false
        return res
          .status(401)
          .json({ success, error: "Please try to login with correct credntials" });
      }
      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        success = false
        return res
          .status(400)
          .json({ success, error: "Please try to login with correct credntials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken })
      // res.send({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 3 : Get loggind in user details : POST "/api/auth/getuser". Login required.

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
