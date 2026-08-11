import { createClient } from "@/lib/supabse/server";
import { assert } from "console";
import { redirect } from "next/navigation";

// type places =
//   | "About"
//   | "Dashboard"
//   | "Event Calendar"
//   | "Explore Programs"
//   | "Student Forums"
//   | "Volunteering"
//   | "Login";

export type Role =
  | "anon"
  | "student"
  | "teacher"
  | "event_organiser"
  | "volunteer";

export async function get_role(): Promise<Role> {
  const supabase = await createClient();
  const {
    data: { user: user },
    error: user_error,
  } = await supabase.auth.getUser();

  if (user_error) {
    if (user_error.name !== "AuthSessionMissingError") {
      console.log("mistake were made:", user_error);
    }
    return "anon" as Role;
  }

  // impossible to reach code ignore
  if (!user) {
    return "anon";
  }

  const { data, error: select_error } = await supabase
    .from("Users")
    .select()
    .eq("id", user.id)
    .single();
  if (select_error || !data) {
    assert(!select_error, "somehow there's a users without a table WTF");
    console.log(select_error);
    return "anon" as Role;
  }
  const result = data.role as Role;
  return result;
}

export async function requireRole(allowedRoles: Role[]) {
  const role = await get_role();

  if (allowedRoles.length !== 0 && !allowedRoles.includes(role)) {
    redirect("/");
  }

  return role;
}
