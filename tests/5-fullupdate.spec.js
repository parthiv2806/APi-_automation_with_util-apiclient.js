import { test } from "../fixtures/apifixtures";
import { expect } from "@playwright/test";

import { PutBooking } from "../payloads/fullupdatepayloads";
import { Put_booking } from "../services/FullupdateService";
// import fs from "fs";
test("Put booking", async ({ booking, token }) => {
//   const { bookingid } = JSON.parse(
//     fs.readFileSync("./test-data/booking.json", "utf-8"),
//   );
  const response = await Put_booking(PutBooking, booking.bookingid, token);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.firstname).toBe(PutBooking.firstname);
  expect(body.lastname).toBe(PutBooking.lastname);
  expect(body.totalprice).toBe(PutBooking.totalprice);
  expect(body.depositpaid).toBe(PutBooking.depositpaid);

  expect(body.bookingdates.checkin).toBe(PutBooking.bookingdates.checkin);

  expect(body.bookingdates.checkout).toBe(PutBooking.bookingdates.checkout);

  expect(body.additionalneeds).toBe(PutBooking.additionalneeds);
});
