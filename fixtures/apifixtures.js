import { test as base } from "@playwright/test";
import { getToken } from "../utils/tokenmanager";
import { Create_booking } from "../services/createbookingService";
import { initApiClient } from "../utils/apiclients";
import { CreateBooking } from "../payloads/createbooking";
export const test = base.extend({
  // token: async ({ request }, use) => {
  //   const token = await getToken(request);
  //   await use(token);
  // },
  token: async ({}, use) => {
    const token = getToken();
    await use(token);
  },

  booking: [
    async ({}, use) => {
      await initApiClient();

      const response = await Create_booking(CreateBooking);

      const body = await response.json();

      const bookingid = body.bookingid;

      console.log("Created Booking ID:", bookingid);

      await use({
        response,
        body,
        bookingid,
      });
    },
    { scope: "worker" },
  ],
});
//cc
