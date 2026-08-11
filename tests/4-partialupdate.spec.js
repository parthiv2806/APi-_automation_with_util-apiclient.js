import { test } from "../fixtures/apifixtures";
import { expect } from "@playwright/test";
import { PartialBooking } from "../payloads/partialupdatepayload";
import { Patch_data } from "../services/partialupdateService";
// import fs from "fs";
test("Patch booking firstname", async ({ booking, token }) => {
//   const { bookingid } = JSON.parse(
//     fs.readFileSync("./test-data/booking.json", "utf-8"),
//   );
  const response = await Patch_data(PartialBooking, booking.bookingid, token);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.firstname).toBe(PartialBooking.firstname);
});
