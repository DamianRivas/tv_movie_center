const request = require("request");
const server = require("../../src/server.js");
const base = "http://localhost:3000";

describe("routes : show", () => {
  describe("GET /tv/:id", () => {
    beforeAll(done => {
      request.get(`${base}/tv/1399`, (err, res, body) => {
        this.err = err;
        this.body = body;
        this.res = res;
        done();
      });
    });

    it("should return status code 200", () => {
      expect(this.err).toBeNull();
      expect(this.res.statusCode).toBe(200);
    });

    it("should contain the tv show title", () => {
      expect(this.body).toContain("Game of Thrones");
    });

    it("should contain an overview of the show", () => {
      expect(this.body).toContain("Overview");
    });

    it("should contain the tv show's genre", () => {
      expect(this.body).toContain("Genres");
    });

    it("should contain the tv show's rating", () => {
      expect(this.body).toContain("Avg. Rating");
    });

    it("should contain the tv show's runtime", () => {
      expect(this.body).toContain("Runtime");
    });
  });

  describe("GET /movie/:id", () => {
    beforeAll(done => {
      request.get(`${base}/movie/157336`, (err, res, body) => {
        this.err = err;
        this.body = body;
        this.res = res;
        done();
      });
    });

    it("should return status code 200", () => {
      expect(this.err).toBeNull();
      expect(this.res.statusCode).toBe(200);
    });

    it("should contain the movie title", () => {
      expect(this.body).toContain("Interstellar");
    });

    it("should contain an overview of the movie", () => {
      expect(this.body).toContain("Overview");
    });

    it("should contain the movie's genre", () => {
      expect(this.body).toContain("Genres");
    });

    it("should contain the movie's rating", () => {
      expect(this.body).toContain("Avg. Rating");
    });

    it("should contain the movie's runtime", () => {
      expect(this.body).toContain("Runtime");
    });
  });
});
