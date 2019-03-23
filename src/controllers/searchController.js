const MovieQueryInterface = require("./movie_queries/movieQueryInterface.js");

// TODO - Implement the search controller
module.exports = {
  index(req, res, next) {
    MovieQueryInterface.search(req.query.search_query, (err, data) => {
      if (err) {
        next(err);
      }
      // console.log(data.results[0]);
      res.render("search/index", {
        results: data.results,
        search_query: req.query.search_query
      });
    });
  }
};
