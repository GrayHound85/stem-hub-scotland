"use client";
import { createClient } from "@/lib/supabse/client";
import { redirect } from "next/navigation";
import { useEffect, type SubmitEvent } from "react";

export default function LoginForm() {
  const supabase = createClient();

  async function clicked(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const from_data = new FormData(event.currentTarget);

    const email = from_data.get("email")?.toString();
    const password = from_data.get("password")?.toString();

    if (!email || !password) {
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data) {
      console.log("sign in error:", error);
      return;
    }
    redirect("/");
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
