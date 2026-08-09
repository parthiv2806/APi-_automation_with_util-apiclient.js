import { put } from "../utils/apiclients";

export async function Put_booking(payload, bookingId, token) {
  return await put(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    payload,
    token,
  );
}
