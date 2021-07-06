const express = require("express");
const router = express.Router();
const jwtMiddleware = require("../utils/jwtMiddleware");//this will authenticate the browser
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

router.post("/send-sms", jwtMiddleware, function (req, res) {
  client.messages
    .create({
      body: req.body.message,
      from: "+12402215541", //if you paid for the api service it will be your real number
      to: "+19176261808", //and you can send real text message to your friends, family, and strangers... but dont do that
    })
    .then((message) => res.json(message))//hashed message
    .catch((error) => {
      console.log(error.message);

      res.status(error.status).json({ message: error.message, error });
    });
});

module.exports = router;
