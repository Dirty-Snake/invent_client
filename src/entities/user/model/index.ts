import { createEffect, createEvent, createStore } from 'effector'
import { PreAuth } from "../api/index";
import { persist } from 'effector-storage/local'

export const $user = createStore<User | null>(null)

export const setUser = createEvent<User>()

export const logout = createEvent<User | null>()

persist({
  store: $user,
  key: "$user",
  keyPrefix: "v2",
});

export const sendPreAuthData = createEffect<{username: string, password: string}, any, Error>(async(data: any) => {
  const res = await PreAuth(data);
  if (res?.status !== 200) throw new Error(res.message);
  return res.data;
})


$user.on(logout, () => null)
$user.on(sendPreAuthData.doneData, (_, t) => t)
$user.on(setUser, (_, t) => t)


