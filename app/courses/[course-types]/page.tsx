import CourseCard from "@/components/cards/CourseCard";
import React from "react";

type Props = {};

const courseTypes = [
  {
    title: "Choosing what to study",
    link: "/courses/course/choosing-what-study",
    description:
      "Some things to bear in mind when making this important decision.",
  },
  {
    title: "A-Z of courses",
    link: "/courses/course/a-z-of-courses",
    description:
      "All about each course, including the core syllabus, options and assessment.",
  },
  {
    title: "About your studies",
    link: "/courses/course/about-your-studies",
    description: "Where, how and by whom will you be taught at Oxford?",
  },
];

const Course = (props: Props) => {
  return (
    <div className="my-10 space-y-5">
      <section className="mx-auto container px-4">
        <div className="space-y-4 mr-[25%]">
          <h1 className="font-bold text-6xl text-gray-900">
            Undergraduate courses
          </h1>
          <p className="text-gray-700 font-medium text-xl">
            Do you already know what you want to study? Have you explored all
            our courses in the subject areas which interest you?
          </p>
          <p className="text-gray-700 font-medium text-xl">
            Make sure you really know your options and don’t immediately go for
            the obvious choice. The most inspiring course may be something you
            didn’t know existed!
          </p>
        </div>
      </section>
      <section className="bg-emerald-500 h-96 text-center">image</section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto container px-4">
        {courseTypes.map(courseType => (
          <CourseCard {...courseType} key={courseType.title} />
        ))}
      </section>
    </div>
  );
};

export default Course;
