import { requireRole } from "@c/GetAuth";
import SignUpForm from "./SignUpForm";

// wants to have a separate place that is server side not client for efficiency
export default async function SignUp() {
  await requireRole(["anon"]);
  return <SignUpForm />;
}
