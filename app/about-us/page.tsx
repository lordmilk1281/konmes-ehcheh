import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="mx-auto container space-y-10 my-10 px-4">
      <Card
        title="Mission"
        description="The vision and mission of the Institute of Qur'an and Sunnah are deeply rooted in the core philosophy of the institution, encapsulated by the guiding principle of 'Kitabullah wa Sunnati' (The Book of Allah and the Sunnah of My Prophet). This fundamental philosophy serves as the bedrock upon which the entire institution is founded, shaping its overarching goals, values, and aspirations."
      />
      <Card
        title="Latest Technology"
        description="The Institute of Quran and Sunnah Annex is thoughtfully equipped with an extensive range of contemporary teaching facilities, ensuring students have access to cutting-edge resources that facilitate an exceptional and progressive learning experience."
      />
    </div>
  );
};

export default AboutUs;

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <section className="border-2 p-4 sm:w-1/2 rounded-lg border-gray-100 shadow-sm bg-gray-50 mx-auto">
      <p className="font-bold text-xl md:text-3xl text-gray-900">{title}</p>
      <p className="font-medium text-gray-700 text-md mt-2">
        {description}
      </p>
    </section>
  );
};
