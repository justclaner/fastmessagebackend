import request from "supertest";
import app from "./app.js";

describe("dummy tests", () => {
  it("should return 'hi'", async () => {
    const res = await request(app).get("/t");

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("hi");
  });

  it("should return 'hi from router'", async () => {
    const res = await request(app).get("/test/f");

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("\"hi\"");
  });
});

