import { requireRole } from "@/Components/GetAuth";
import LoginForm from "./LoginForm";

export default async function Login() {
  await requireRole(["anon"]);
  return <LoginForm />;
}
