const MovieQueryInterface = require("./movie_queries/movieQueryInterface.js");

// TODO - Implement the search controller
module.exports = {
  showTV(req, res, next) {
    MovieQueryInterface.getTvShow(req.params.id, (err, show) => {
      if (err) {
        next(err);
      }
      res.render("show/tv", { show });
    });
  }
};
