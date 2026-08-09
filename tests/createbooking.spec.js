import { test } from "../fixtures/apifixtures";
import { CreateBooking } from "../payloads/createbooking";
import { expect } from "@playwright/test";
test("Create booking", async ({ booking }) => {
  expect(booking.response.status()).toBe(200);

  expect(booking.body.booking.firstname).toBe(CreateBooking.firstname);

  expect(booking.body.booking.lastname).toBe(CreateBooking.lastname);

  expect(booking.body.booking.totalprice).toBe(CreateBooking.totalprice);

  expect(booking.body.booking.depositpaid).toBe(CreateBooking.depositpaid);

  expect(booking.body.booking.bookingdates.checkin).toBe(
    CreateBooking.bookingdates.checkin,
  );

  expect(booking.body.booking.bookingdates.checkout).toBe(
    CreateBooking.bookingdates.checkout,
  );

  console.log("Booking ID:", booking.bookingid);
});
