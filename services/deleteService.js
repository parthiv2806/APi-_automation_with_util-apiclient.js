import { remove } from "../utils/apiclients";

export async function Delete_booking(bookingId, token) {
  return await remove(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    token
  );
}