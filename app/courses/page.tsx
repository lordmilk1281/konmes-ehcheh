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
          <div key={group.name} className="space-y-1 group cursor-pointer">
            <div className="bg-emerald-300 rounded-lg aspect-video group-hover:bg-emerald-400" />
            <p className="font-medium text-lg md:text-xl text-gray-700 group-hover:text-gray-900">
              {group.name}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Courses;
