"use server";
import { cookies } from "next/headers";

export async function getCookieByKey(key: string) {
  // const cookieStore = await cookies();
  // const cookie = cookieStore.get(key);
  return (await cookies()).get(key)?.value ?? null;
  // if (!cookie) {
  //   return null;
  // }
  // return cookie.value;
}

export async function setCookieByKey(key: string, value: string) {
  // const cookieStore = await cookies();
  // cookieStore.set(key, value);
  (await cookies()).set(key, value);
}

export async function deleteCookieByKey(key: string) {
  (await cookies()).delete(key);
}
