import { request } from "@playwright/test";

let apiContext = null;

export async function initApiClient() {
  apiContext = await request.newContext();
}

export async function get(url) {
  return await apiContext.get(url);
}

export async function post(url, payload) {
  return await apiContext.post(url, {
    data: payload,
  });
}

export async function put(url, payload) {
  return await apiContext.put(url, {
    data: payload,
  });
}

export async function patch(url, payload, token) {
  return await apiContext.patch(url, {
    data: payload,
    headers: {
      Cookie: `token=${token}`,
    },
  });
}

export async function remove(url) {
  return await apiContext.delete(url);
}
