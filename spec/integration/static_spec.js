const request = require("request");
const server = require("../../src/server.js");
const base = "http://localhost:3000";

describe("routes : static", () => {
  describe("GET /", () => {
    describe("GOOD request", () => {
      beforeAll(done => {
        request.get(base, (err, res, body) => {
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

      it("should contain the app title in the body", () => {
        expect(this.body).toContain("TV Movie Center");
      });

      it("should contain a section for popular TV shows", () => {
        expect(this.body).toContain("Popular TV Shows");
      });
    });
  });
});
