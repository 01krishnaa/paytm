const express = require("express");
const userRouter = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../db/db");
const { JWT_SECRET } = require("../config");

const zodSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

const signInZodSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

userRouter.post("/signup", async (req, res) => {
  const parsedSchema = zodSchema.safeParse(req.body);
  if (!parsedSchema.success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const token = jwt.sign(req.body.username, JWT_SECRET);

  res.status(200).json({
    message: "User created successfully",
    token,
  });
});

userRouter.post("/signin", async (req, res) => {
  const parsedSchema = signInZodSchema.safeParse(req.body);
  if (!parsedSchema.success) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    const token = jwt.sign(req.body.username, JWT_SECRET);
    return res.status(200).json({
      token,
    });
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});

module.exports = {
  userRouter,
};
