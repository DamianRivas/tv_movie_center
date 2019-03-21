module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const searchRoutes = require("../routes/search");
    const showRoutes = require("../routes/show");
    app.use(staticRoutes);
    app.use(searchRoutes);
    app.use(showRoutes);
  }
};
