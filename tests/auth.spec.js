import { test } from "../fixtures/apifixtures";
import { expect } from "@playwright/test";

test("Login API", async ({ auth }) => {

  expect(auth.response.status()).toBe(200);

  expect(auth.body.token).toBeTruthy();

});