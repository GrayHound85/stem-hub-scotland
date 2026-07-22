import Link from "next/link";

function NavBar() {
  const value: { display: string; link: string }[] = [
    { display: "Event Organising", link: "/event_organising" },
    { display: "Student Forum", link: "/student_forum" },
    { display: "Volunteering", link: "/volunteering" },
    { display: "About", link: "/about" },
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
        {value.map((item, index) => (
          <div
            key={index}
            className="flex justify-center w-40 border-2 border-gray-300 p-1 rounded-lg">
            <Link
              href={item.link}
              className="text-black font-semibold">
              {item.display}
            </Link>
          </div>
        ))}
        <div className="flex justify-center text-white bg-blue-700 w-40 p-1 ml-12 rounded-lg">
          <h1> Sign In</h1>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
