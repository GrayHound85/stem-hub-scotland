import NavBar from "@/Components/NavBar";
import "@/app/global.css";

export const metadata = {
  title: "STEM Hub Scotland",
  description: "Connecting STEM education across Scotland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
