export async function check_valid(
  value:
    | "About"
    | "Dashboard"
    | "Event Calendar"
    | "Explore Programs"
    | "Student Forums"
    | "Volunteering"
    | "Login",
) {
  switch (value) {
    case "About":
      return true;
    case "Dashboard":
      return true;
    case "Event Calendar":
      return true;
    case "Explore Programs":
      return false;
    case "Student Forums":
      return true;
    case "Volunteering":
      return true;
    case "Login":
      return true;
  }
}
