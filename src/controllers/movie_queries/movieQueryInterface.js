const fetch = require("node-fetch");
const api_key = "api_key=" + process.env.MOVIE_DATABASE_API_KEY;
const base_url = "https://api.themoviedb.org/3";
const language = "language=en-US";

module.exports = {
  getPopularMovies(callback) {
    fetch(
      `${base_url}/discover/tv?${api_key}&${language}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`
    )
      .then(res => res.json())
      .then(json => {
        callback(null, json.results);
      })
      .catch(err => {
        callback(err);
      });
  },

  // TODO - Implement the search query
  search(search_query, callback) {
    fetch(
      `https://api.themoviedb.org/3/search/multi?${api_key}&${language}&query=${search_query}&page=1&include_adult=false`
    )
      .then(res => res.json())
      .then(json => {
        callback(null, json);
      })
      .catch(err => {
        callback(err);
      });
  }
};
