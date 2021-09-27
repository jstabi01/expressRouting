const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const { mode, mean, median, validate } = require("./math");

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/mean", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError("Must enter comma seperated list of numbers", 400);
  }
  let numStrings = req.query.nums.split(",");
  let nums = validate(numStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mean",
    result: mean(nums),
  };

  return res.send(result);
});

app.get("/median", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError("Must enter comma seperated list of numbers", 400);
  }
  let numStrings = req.query.nums.split(",");
  let nums = validate(numStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "median",
    result: median(nums),
  };

  return res.send(result);
});

app.get("/mode", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError("Must enter comma seperated list of numbers", 400);
  }
  let numStrings = req.query.nums.split(",");
  let nums = validate(numStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mode",
    result: mode(nums),
  };

  return res.send(result);
});

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

  return next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
