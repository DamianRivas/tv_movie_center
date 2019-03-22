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
  }
};