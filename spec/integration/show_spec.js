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

  describe("GET /person/:id", () => {
    beforeAll(done => {
      request.get(`${base}/person/6193`, (err, res, body) => {
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

    it("should contain the person's name", () => {
      expect(this.body).toContain("Leonardo DiCaprio");
    });

    it("should contain a biography of the person", () => {
      expect(this.body).toContain("Bio");
    });

    it("should contain the person's birthday", () => {
      expect(this.body).toContain("Birthday");
    });

    it("should contain the person's place of birth", () => {
      expect(this.body).toContain("Place of Birth");
    });

    it("should NOT contain the person's deathday if still living", () => {
      expect(this.body).not.toContain("Deceased");
    });

    it("should contain the person's deathday if decesased", done => {
      request.get(`${base}/person/4165`, (err, res, body) => {
        expect(body).toContain("Deceased");
        done();
      });
    });
  });
});
