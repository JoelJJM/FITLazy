"use client";

import React, { useActionState } from "react";
import { login } from "./actions";

export default function LoginForm() {
  //useActionState is a hook from react which takes a server action and gives
  //you back the action property to put on form and some state which will be updated when action is running
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <form
      action={loginAction}
      className="flex max-w-[300px] flex-col gap-2 p-3"
    >
      <div className="flex flex-col gap-2">
        <input
          id="email"
          name="email"
          placeholder="Email"
          className="bg-gray-600 rounded-xl p-2"
        />
      </div>

      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email}</p>
      )}

      <div className="flex flex-col gap-2">
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="bg-gray-600 rounded-xl p-2"
        />
      </div>

      {state?.errors?.password && (
        <p className="text-red-500">{state.errors.password}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}
