import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "../../public/imgs/logo.svg";
import Search from "../components/Search";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ohana",
  description: "Website thue nha tro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex-col">
        <header className="shadow-md sticky top-0 right-0">
          <div className="bg-main">
            <div className="max-w-screen-xl text-white h-10 flex items-center justify-end mx-auto">
              <MdFavoriteBorder
                style={{ color: "white", fontSize: 24}}
                className="mx-2"
              />
              <MdOutlineAddBox
                style={{ color: "white", fontSize: 24}}
                className="mx-2"
              />
              <button className="mx-2">dang nhap</button>
            </div>
          </div>
          <div className="bg-white">
            <div className="max-w-screen-xl flex items-center py-4 mx-auto">
              <Image src={Logo} alt="Ohana" className="mr-14 mx-2" />
              <Search />
            </div>
          </div>
        </header>
        <main style={{height: 1000}} className="bg-home" >
          {/* <div> */}
            <div className="max-w-screen-xl mx-auto">{children}</div>
          {/* </div> */}
        </main>
        <footer max-w-screen-xl mx-auto>
          <div className="max-w-screen-xl mx-auto">footer</div>
        </footer>
      </body>
    </html>
  );
}
