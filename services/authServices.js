import { post } from "../utils/apiclients";

export async function login(payload) {
    return await post(
        "https://restful-booker.herokuapp.com/auth",
        payload
    );
}