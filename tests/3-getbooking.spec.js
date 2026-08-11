import { test } from "../fixtures/apifixtures";
import { Get_booking } from "../services/getthebooking";
import { expect } from "@playwright/test";
// import fs from "fs";
test("Get booking", async ({ booking }) => {
//   const { bookingid } = JSON.parse(
//     fs.readFileSync("./test-data/booking.json", "utf-8"),
//   );
  const response = await Get_booking(booking.bookingid);

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body, "1");
});
