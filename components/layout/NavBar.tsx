import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const pages = [
  {
    id: "1",
    name: "Home",
    url: "/",
  },
  {
    id: "3",
    name: "Courses",
    url: "/courses",
  },
  {
    id: "4",
    name: "Mission",
    url: "/mission",
  },
  {
    id: "5",
    name: "Campus",
    url: "/campus",
  },
  {
    id: "7",
    name: "Gallery",
    url: "/gallery",
  },
];

const NavBar = (props: Props) => {
  return (
    <header className="flex sticky top-0 bg-white/50 backdrop-blur-lg">
      <nav className="flex gap-x-10 mx-auto container h-full sm:px-4 py-3">
        <Link href="/" className="relative aspect-square">
          <Image
            alt="logo"
            src="/logo.png"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center divide-x divide-gray-300">
          {pages.map(page => (
            <Link
              key={page.id}
              href={page.url}
              className="font-medium text-gray-700 hover:text-gray-900 px-5"
            >
              {page.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
