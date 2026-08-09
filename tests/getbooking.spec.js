import { test } from "../fixtures/apifixtures";
import { Get_booking } from "../services/getthebooking";
import { expect } from "@playwright/test";

test("Get booking", async ({ booking }) => {

  const response = await Get_booking(booking.bookingid);

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

});