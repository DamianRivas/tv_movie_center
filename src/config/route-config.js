module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const searchRoutes = require("../routes/search");
    app.use(staticRoutes);
    app.use(searchRoutes);
  }
};
