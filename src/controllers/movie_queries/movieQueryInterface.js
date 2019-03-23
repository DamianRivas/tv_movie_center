const fetch = require("node-fetch");
const api_key = "api_key=" + process.env.MOVIE_DATABASE_API_KEY;
const base_url = "https://api.themoviedb.org/3";
const language = "language=en-US";

function fetchFromDB(url, callback) {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      callback(null, json);
    })
    .catch(err => {
      callback(err);
    });
}

module.exports = {
  getPopularShows(callback) {
    const URL = `${base_url}/discover/tv?${api_key}&${language}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    fetchFromDB(URL, callback);
  },

  search(search_query, callback) {
    const URL = `${base_url}/search/multi?${api_key}&${language}&query=${search_query}&page=1&include_adult=false`;
    fetchFromDB(URL, callback);
  },

  getTvShow(id, callback) {
    const URL = `${base_url}/tv/${id}?${api_key}&${language}`;
    fetchFromDB(URL, callback);
  },

  getMovie(id, callback) {
    const URL = `${base_url}/movie/${id}?${api_key}&${language}`;
    fetchFromDB(URL, callback);
  }
};
