import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const pages = [
  {
    id: "2",
    name: "About Us",
    url: "/about-us",
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
    id: "6",
    name: "Resources",
    url: "/resources",
  },
  {
    id: "7",
    name: "Gallery",
    url: "/gallery",
  },
  {
    id: "8",
    name: "Contact Us",
    url: "/contact-us",
  },
];

const Footer = (props: Props) => {
  return (
    <footer className="mx-auto sm:px-4 pt-8 container divide-y divide-gray-200">
      <div className="flex items-start gap-10 pb-10">
        <Image
          alt="logo"
          src="/logo.png"
          width={80}
          height={80}
          className="object-contain"
        />
        <section className="grid divide-y divide-gray-200 w-40">
          {pages.map(page => (
            <Link
              key={page.id}
              href={page.url}
              className="text-sm text-gray-700 py-3"
            >
              {page.name}
            </Link>
          ))}
        </section>
        <div className="text-sm flex flex-col text-gray-700 mt-auto ml-auto">
          <span>Head office (MWSC - Customer Service Building: 4th floor)</span>
          <span>Ameenee Magu, Malé, Republic of Maldives</span>
          <span>Phone: 3323902, 3321684, 3323918</span>
          <span>Email: secretariat@malecity.gov.mv</span>
        </div>
      </div>
      <div className="py-8">
        <span className="text-xs text-gray-500">
          © {new Date().getFullYear()} Institute for Quran and Sunnah. Male,
          Maldives
        </span>
      </div>
    </footer>
  );
};

export default Footer;
