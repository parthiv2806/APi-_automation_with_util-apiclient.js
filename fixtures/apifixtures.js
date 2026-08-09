import { test as base } from "@playwright/test";
import { getToken } from "../utils/tokenmanager";
import { Create_booking } from "../services/createbookingService";

export const test = base.extend({
  token: async ({ request }, use) => {
    const token = await getToken(request);
    await use(token);
  },

  bookingid: async ({ request }, use) => {
    const bookingid = await Create_booking(request);
    await use(bookingid);
  },
});
//cc
