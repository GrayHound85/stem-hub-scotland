//  ```tsx

import { check_valid } from "@/Components/GetAuth";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default async function Login() {
  const valid = await check_valid("Login");

  if (!check_valid("Login")) {
    redirect("/");
  }
  return <LoginForm />;
}
//  ```
