import { test as base } from "@playwright/test";

import { getToken, setToken } from "../utils/tokenmanager";
import { initApiClient } from "../utils/apiclients";

import { login } from "../services/authServices";
import { Authpayload } from "../payloads/authpayloads";

import { Create_booking } from "../services/createbookingService";
import { CreateBooking } from "../payloads/createbooking";

// import fs from "fs";
export const test = base.extend({
  // Initialize API client once per worker
  apiClient: [
    async ({}, use) => {
      await initApiClient();
      await use();
    },
    { scope: "worker" },
  ],

  // Login and generate token
  auth: [
    async ({ apiClient }, use) => {
      const response = await login(Authpayload);

      const body = await response.json();

      setToken(body.token);

      await use({
        response,
        body,
      });
    },
    { scope: "worker" },
  ],

  // Get stored token
  token: [
    async ({ auth }, use) => {
      const token = getToken();

      console.log(" Token:", token);

      await use(token);
    },
    { scope: "worker" },
  ],

  // Create booking only once per worker
  booking: [
    async ({ apiClient }, use) => {
      const response = await Create_booking(CreateBooking);

      const body = await response.json();

      const bookingid = body.bookingid;

      console.log("Created Booking ID:", bookingid);
      // fs.writeFileSync(
      //   "./test-data/booking.json",
      //   JSON.stringify({ bookingid }, null, 2),
      // );

      await use({
        response,
        body,

        bookingid,
      });
    },
     { scope: "worker" },
  ],
});
