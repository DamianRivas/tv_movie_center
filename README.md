# TV Movie Center

**TV Movie Center** is an entertaintment media discovery application. Use it to discover today's pupular tv shows, or use it to search for your favorite shows, movies, and actors.

## Project Requirements

- List popular TV shows on initial load and render a search bar.
- When searching for a TV show, display a list of shows whose title matches the search parameters.
- When clicking on a TV show, display more information about that show

### Implementation

- **Back-end**: Node.js & Express
- **Testing**: Jasmine
- **Front-end**: EJS

Create an interface between the back-end and The Movie Database (TMDB) API to simplify queries to TMDB, known as the `movieQueryInterface` (MQI)

- Use `node-fetch` since all requests seem to be basic GET requests
- With the simplicity of querying thanks to my MQI, it was very easy to implement pages for movies as well as actors.

Store the API key in a `.env` file for security.

No local database is needed since all the data needed is in TMDB.

The Bootstrap library was used to quickly build the application's UI.
