function NavBar() {
  const value: string[] = [
    "Event Organising",
    "Student Forum",
    "Volunteering",
    "About",
  ];
  return (
    <div className="flex items-center justify-between bg-white border-b-2 border-gray-300 mx-5 p-1 px-32 h-20">
      <div className="flex-col text-xl">
        <div className="flex gap-1">
          <h1 className="text-black font-semibold">STEM</h1>

          <h1 className="text-blue-800 font-semibold">Scotland</h1>
        </div>
        <h1 className="text-gray-400 text-lg font-semibold">HUB</h1>
      </div>

      <div className="flex gap-2">
        {value.map((item, index) => (
          <p
            key={index}
            className="text-black font-semibold border-2 border-gray-300 p-1 px-5 rounded-lg">
            {item}
          </p>
        ))}
      </div>
      <div>
        <h1 className="text-white bg-blue-700 rounded-lg p-1 px-5">Sign In</h1>
      </div>
    </div>
  );
}
export default NavBar;
