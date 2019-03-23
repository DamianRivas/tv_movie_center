const MovieQueryInterface = require("./movie_queries/movieQueryInterface.js");

module.exports = {
  showTV(req, res, next) {
    MovieQueryInterface.getTvShow(req.params.id, (err, show) => {
      if (err) {
        next(err);
      }
      // console.log(show);
      res.render("show/tv", { show });
    });
  },

  showMovie(req, res, next) {
    MovieQueryInterface.getMovie(req.params.id, (err, movie) => {
      if (err) {
        next(err);
      }
      // console.log(movie);
      res.render("show/movie", { movie });
    });
  }
};
