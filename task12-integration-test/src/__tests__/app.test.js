const request = require("supertest");
const app = require("../app");
const { expect, test, describe } = require("@jest/globals");

describe("User API Positive", () => {
  test("GET / should return ", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("API is running");
  });

  test("GET /api/users should return a list of users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("GET /api/users/1 should return user id:1 details", async () => {
    const res = await request(app).get("/api/users/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name");
    expect(res.body.name).toBe("Alice");
  });

  test("POST /api/users should create new user", async () => {
    const newUserObj = {
      name: "Make one kebab",
    };

    const res = await request(app).post("/api/users").send(newUserObj);

    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBeGreaterThan(0);
    expect(res.body.name).toBe(newUserObj.name);
  });
});

describe("User API Negative", () => {
  test("GET /api/users/-1 should not return data", async () => {
    const res = await request(app).get("/api/users/-1");
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe("User not found");
  });
});
