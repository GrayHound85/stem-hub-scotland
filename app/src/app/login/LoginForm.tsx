"use client";
import { type SubmitEvent } from "react";

export default function LoginForm() {
  function clicked(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = new FormData(event.currentTarget);

    console.log(value.get("email"));
    console.log(value.get("password"));
  }

  return (
    <main className="flex h-screen justify-center items-center">
      <form
        className="w-full sm:w-1/3 border rounded-md p-4"
        onSubmit={clicked}
        method="POST">
        <div className="flex justify-center">
          <h1 className="font-bold text-2xl">Login</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className=" w-full border rounded-md px-3 py-2 outline-none focus:ring-2"
            required
          />
        </div>
        <div className="flex justify-center border rounded-xl bg-blue-300 hover:bg-blue-500">
          <button type="submit" className="text-2xl font-bold bg-center ">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
