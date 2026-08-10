import Link from "next/link";
import { check_valid } from "./GetAuth";

async function NavBar() {
  const value: { display: string; link: string; requirement: boolean }[] = [
    {
      display: "About",
      link: "/about",
      requirement: await check_valid("About" as const),
    },
    {
      display: "Dashboard",
      link: "/dashboard",
      requirement: await check_valid("Dashboard" as const),
    },
    {
      display: "Event Calendar",
      link: "/event_calendar",
      requirement: await check_valid("Event Calendar" as const),
    },
    {
      display: "Explore Programs",
      link: "/explore_programs",
      requirement: await check_valid("Explore Programs" as const),
    },
    {
      display: "Student Forums",
      link: "/student_forums",
      requirement: await check_valid("Student Forums" as const),
    },
    {
      display: "Volunteering",
      link: "/volunteering",
      requirement: await check_valid("Volunteering" as const),
    },
  ];
  return (
    <div className="flex items-center justify-between bg-white border-b-2 border-gray-300 mx-5 p-1 px-20 h-20">
      <Link href={"/"}>
        <div className="flex-col text-xl">
          <div className="flex gap-1">
            <h1 className="text-black font-semibold">STEM</h1>
            <h1 className="text-blue-800 font-semibold">Scotland</h1>
          </div>
          <h1 className="text-gray-400 text-lg font-semibold">HUB</h1>
        </div>
      </Link>

      <div className="flex gap-2">
        {value.map(
          ({ display, link, requirement }, index) =>
            requirement && (
              <div
                key={index}
                className="flex justify-center w-40 border-2 border-gray-300 p-1 rounded-lg">
                <Link href={link} className="text-black font-semibold">
                  {display}
                </Link>
              </div>
            ),
        )}
        <div className="flex justify-center text-white bg-blue-700 w-40 p-1 ml-12 rounded-lg">
          <Link href="\login"> Login/{"\n"} Signup</Link>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
