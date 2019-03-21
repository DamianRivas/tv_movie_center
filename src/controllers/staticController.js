const MovieQueryInterface = require("./movie_queries/movieQueryInterface.js");

module.exports = {
  index(req, res, next) {
    MovieQueryInterface.getPopularShows((err, data) => {
      if (err) {
        next(err);
      }
      shows = data.results.slice(0, 20);
      res.render("static/index", { shows });
    });
  }
};
