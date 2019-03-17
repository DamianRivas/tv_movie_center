const express = require("express");
const app = express();

const appConfig = require("./config/main-config");
appConfig.init();

const routeConfig = require("./config/route-config.js");
routeConfig.init(app);

module.exports = app;
