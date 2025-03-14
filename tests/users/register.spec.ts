import request from "supertest";
import app from "../../src/app";

describe("POST /auth/register", () => {
    describe("given all fields", () => {
        it("should return the 201 status code", async () => {
            //AAA

            //Arrange

            const userData = {
                firstName: "Abhishek",
                lastName: "Biradar",
                email: "seekernothing@gmail.com",
                password: "12345",
            };

            //Act
            const responce = await request(app)
                .post("/auth/register")
                .send(userData);
            //Assert

            expect(responce.statusCode).toBe(201);
        });

        it("should return valid json response", async () => {
            //AAA

            //Arrange

            const userData = {
                firstName: "Abhishek",
                lastName: "Biradar",
                email: "seekernothing@gmail.com",
                password: "12345",
            };

            //Act
            const responce = await request(app)
                .post("/auth/register")
                .send(userData);

            //Assert application/json utf-8

            expect(
                (responce.headers as Record<string, string>)["content-type"],
            ).toEqual(expect.stringContaining("json"));
        });
    });
    describe("fields are missing", () => {});
});
