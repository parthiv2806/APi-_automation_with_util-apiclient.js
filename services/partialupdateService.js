import { patch } from "../utils/apiclients";

export async function Patch_data(payload, bookingId, token) {
  return await patch(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    payload,
    token
  );
}