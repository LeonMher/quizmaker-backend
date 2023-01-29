const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
// register endpoint
module.exports = app.post("/register", (request, response) => {
  //   hash the password
  bcrypt.hash(request.body.password, 1).then((hashedPassword) => {
    // create a new user instance and collect the data
    const user = new User({
      email: request.body.email,
      password: hashedPassword,
    });

    // save the new user
    user
      .save()
      // return success if the new user is added to the database successfully
      .then((result) => {
        response.status(201).send({
          message: "User Created Successfully",
          result,
        });
      })
      // catch error if the new user wasn't added successfully to the database
      .catch((error) => {
        response.status(500).send({
          message: "Error creating user",
          error,
        });
      });
  });
});
