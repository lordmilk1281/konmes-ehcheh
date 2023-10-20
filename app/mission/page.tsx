import React from "react";

type Props = {};

const objectives = [
  "Develop educational programs and curricula at a high level",
  "Maintain high quality of assessment work",
  "Produce students who can advance in competition",
  "High quality of teaching and maintenance",
  "Improve the quality of services provided to students",
  "Improving the quality of teachers",
];

const Mission = (props: Props) => {
  return (
    <div className="my-10 space-y-10 mx-auto container">
      <section className="text-center space-y-2 border-2 p-4 w-1/2 rounded-lg border-gray-100 shadow-sm bg-gray-50 mx-auto">
        <p className="font-medium text-gray-700 text-md">
          The vision and mission of the Institute of Qur&apos;an and Sunnah is
          based on the main philosophy of the Institute, which is “Kitabullah wa
          Sunnati” (The Book of Allah and the Sunnah of My Prophet).
        </p>
        <p className="font-medium text-gray-700 text-md">
          The education, training and qualities provided by the UN are shaped to
          achieve success in this world and the Hereafter without losing their
          way
        </p>
      </section>
      <section className="text-center space-y-2 border-2 p-4 w-1/2 rounded-lg border-gray-100 shadow-sm bg-gray-50 mx-auto">
        <p className="font-bold text-xl md:text-3xl text-gray-900">
          Imagination
        </p>
        <p className="font-medium text-gray-700 text-md">
          The vision of the Institute of Qur&apos;an and Sunnah is to be the
          most prominent institution in Sri Lanka in spreading the knowledge of
          the Qur&apos;an and Sunnah with the help of modern facilities.
        </p>
      </section>

      <section className="text-center space-y-2 border-2 p-4 w-1/2 rounded-lg border-gray-100 shadow-sm bg-gray-50 mx-auto">
        <p className="font-bold text-xl md:text-3xl text-gray-900">Message</p>
        <p className="font-medium text-gray-700 text-md">
          The mission of the Institute of Qur&apos;an and Sunnah is to build
          scholarly competent people who will love the Qur&apos;an and Sunnah
          and preserve Dhvehi Islamic culture.
        </p>
      </section>

      <section className="text-center space-y-2 border-2 p-4 w-1/2 rounded-lg border-gray-100 shadow-sm bg-gray-50 mx-auto">
        <p className="font-bold text-xl md:text-3xl text-gray-900">
          Strategic Objectives
        </p>
        <ol>
          {objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Mission;
