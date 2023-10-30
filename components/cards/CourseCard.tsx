import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  link: string;
  description?: string;
};

const CourseCard = ({ title, link, description }: Props) => {
  return (
    <Link href={link}>
      <div className="space-y-1 group cursor-pointer">
        <div className="bg-emerald-400 rounded-lg aspect-video group-hover:bg-emerald-400" />
        <p className="font-semibold text-lg md:text-3xl text-gray-900">
          {title}
        </p>
        <p className="text-gray-900 font-medium">{description}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
