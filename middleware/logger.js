const express = require("express");
const colors = require("colors");
const moment = require("moment");
const Info = console.info;

const logger = (req, res, next) => {
  Info(
    `\n[${req.protocol}` +
      ` Method:` +
      ` ${req.method} `.black.bgWhite +
      `]` +
      `[Original URL:` +
      ` ${req.originalUrl} `.black.bgWhite +
      `]` +
      ` [Response Address:` +
      ` ${req.protocol}://${req.get("host")}${req.originalUrl} `.bold.bgGreen
        .white +
      `] ` +
      ` [Response Time: ${moment().format("MMMM Do YYYY, h:mm:ss a")}] `.bgWhite
        .black +
      `\n`
  );
  const start = new Date().getTime();
  res.on("finish", () => {
    const elapsed = new Date().getTime() - start;
    Info(
      `[${req.protocol}` +
        ` Method:` +
        ` ${req.method} `.black.bgWhite +
        `]` +
        `[Original URL:` +
        ` ${req.originalUrl} `.black.bgWhite +
        `]` +
        ` [HTTP Status CODE:` +
        ` ${res.statusCode} `.bold.bgRed.white +
        `]` +
        `[ Elapsed Time: ` +
        ` ${elapsed}ms `.bgWhite.black +
        `]` +
        ` \n` +
        `-`.repeat(130)
    );
  });
  next();
};

module.exports = logger;
