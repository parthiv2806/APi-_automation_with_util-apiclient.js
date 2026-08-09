import { test, expect } from "@playwright/test";
import { initApiClient } from "../utils/apiclients";
import { Create_booking } from "../services/createbookingService";
import { CreateBooking } from "../payloads/createbooking";

test("Create booking", async () => {
  await initApiClient();
  const response = await Create_booking(CreateBooking);
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body);
  expect(body.booking.firstname).toBe(CreateBooking.firstname);
  expect(body.booking.lastname).toBe(CreateBooking.lastname);
  expect(body.booking.totalprice).toBe(CreateBooking.totalprice);
  expect(body.booking.depositpaid).toBe(CreateBooking.depositpaid);
  expect(body.booking.bookingdates.checkin).toBe(
    CreateBooking.bookingdates.checkin,
  );
  expect(body.booking.bookingdates.checkout).toBe(
    CreateBooking.bookingdates.checkout,
  );
  expect(body.booking.additionalneeds).toBe(CreateBooking.additionalneeds);
});
