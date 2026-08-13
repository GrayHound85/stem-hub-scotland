import { requireRole } from "@c/GetAuth";
import SignUpForm from "./SignUpForm";

export default async function Signin() {
  await requireRole(["anon"]);
  return <SignUpForm />;
}
