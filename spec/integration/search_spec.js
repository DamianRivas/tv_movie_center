const request = require("request");
const server = require("../../src/server.js");
const base = "http://localhost:3000/search";

describe("routes : search", () => {
  describe("GET /search", () => {
    // TODO - Implement more test cases

    it("should return the apporopriate results", done => {
      request(`${base}?search_query=interstellar`, (err, res, body) => {
        expect(body).toContain("Interstellar");
        done();
      });
    });
  });
});
