//  ```tsx

import { get_role, requireRole } from "@/Components/GetAuth";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default async function Login() {
  requireRole(["anon"]);
  return <LoginForm />;
}
//  ```
