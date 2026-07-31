import { test, expect } from "@playwright/test";
import { initApiClient } from "../utils/apiclients";
import { login } from "../services/authServices";
import { Authpayload } from "../payloads/authpayloads";
import { setToken } from "../utils/tokenmanager";
import { getToken } from "../utils/tokenmanager";

test("Login API", async () => {
  await initApiClient();

  const response = await login(Authpayload);

  expect(response.status()).toBe(200);

  const body = await response.json();

  setToken(body.token);

  console.log("Generated Token :", getToken());
});
