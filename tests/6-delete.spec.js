import { test } from "../fixtures/apifixtures";
import { expect } from "@playwright/test";
import { Delete_booking } from "../services/deleteService";
// import  fs  from "fs";

test("Delete booking", async ({ booking, token }) => {
  //   const { bookingid } = JSON.parse(
  //     fs.readFileSync("./test-data/booking.json", "utf-8"),
  //   );
  const response = await Delete_booking(booking.bookingid, token);

  expect(response.status()).toBe(201);
});
