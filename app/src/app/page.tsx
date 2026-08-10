import NavBar from "../Components/NavBar";
import "./global.css";

export default function Home() {
  return (
    <main
      className="
        h-full
        bg-[radial-gradient(circle_at_85%_90%,blue_0%,white_50%)]">
      <div className="flex flex-col justify-center items-center w-1/2 h-full">
        <div className="w-3/4">
          <h1 className="text-6xl">Discover</h1>
          <h1 className="text-6xl">Scotland's STEM</h1>
          <h1 className="text-6xl mb-4">Opportunities</h1>
          <p>
            The central hub for scottish teachers, students, volunteers and
            event organisers to discover opportunities, get critical information
            and meet others.
          </p>
          <div className="flex flex-row">
            <h1> button 1</h1>
            <h1> button 2</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
