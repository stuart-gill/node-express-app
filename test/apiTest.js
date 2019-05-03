const request = require("supertest");
const app = require("../src");

describe("GET /users", function() {
  it("responds with json containing a list of all users", function(done) {
    request(app)
      .get("/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
