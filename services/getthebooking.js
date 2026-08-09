import { get } from "../utils/apiclients";

export async function Get_booking(bookingid) {
    return await get(
        `https://restful-booker.herokuapp.com/booking/${bookingid}`
    );
}