import { test as base } from "@playwright/test";
import { getToken } from "../utils/tokenmanager";

export const test = base.extend({
  token: async ({ request }, use) => {
    const token = await getToken(request);
    await use(token);
  },
});
//cc