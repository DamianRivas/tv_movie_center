const MovieQueryInterface = require("./movie_queries/movieQueryInterface.js");

module.exports = {
  index(req, res, next) {
    MovieQueryInterface.getPopularMovies((err, shows) => {
      if (err) {
        next(err);
      }
      shows = shows.slice(0, 20);
      res.render("static/index", { shows });
    });
  }
};
