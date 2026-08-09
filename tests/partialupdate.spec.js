import { test } from "../fixtures/apifixtures";
import { expect } from "@playwright/test";
import { PartialBooking } from "../payloads/partialupdatepayload";
import { Patch_data } from "../services/partialupdateService";
test("Patch booking firstname", async ({ booking, token }) => {

  const response = await Patch_data(
    PartialBooking,
    booking.bookingid,
    token
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.firstname).toBe(PartialBooking.firstname);
});
