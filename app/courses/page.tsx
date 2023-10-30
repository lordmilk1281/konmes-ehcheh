import CourseCard from "@/components/cards/CourseCard";
import React from "react";

type Props = {};

const mainGroups = [
  {
    name: "Certificate",
    link: "/certificate",
  },
  {
    name: "Advanced Certificate",
    link: "/advanced-certificate",
  },
  {
    name: "Diploma",
    link: "/diploma",
  },
  {
    name: "Advanced Degree",
    link: "/advance-degree",
  },
  {
    name: "Bachelors Degree",
    link: "/bachelors-degree",
  },
];

const Courses = (props: Props) => {
  return (
    <div className="my-10 mx-auto container space-y-5 px-4">
      <section>
        <h1 className="font-bold text-xl md:text-3xl text-gray-900">Courses</h1>
        <p className="font-medium text-gray-700 text-md">
          On our course pages you&apos;ll find essential information about each
          department and the courses they offer, to help you to narrow your
          focus to a particular course.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mainGroups.map(group => (
          <CourseCard {...group} title={group.name} key={group.name} />
        ))}
      </section>
    </div>
  );
};

export default Courses;
