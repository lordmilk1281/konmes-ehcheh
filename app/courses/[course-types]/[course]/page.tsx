"use client";

import Overview from "@/components/course/Overview";
import React, { useState } from "react";

type Props = {};

const tabs = [
  {
    name: "Overview",
    id: "overview",
  },
  {
    name: "Structure",
    id: "structure",
  },
  {
    name: "Admission Requirements",
    id: "admission-requirements",
  },
  {
    name: "Fees and Funding",
    id: "fees",
  },
];

const tabComponents = {
  overview: <Overview />,
};

const Course = (props: Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="space-y-5">
      <section className="h-96 bg-emerald-500"></section>
      <section className="mx-auto container px-4">
        <h1 className="text-5xl font-bold text-gray-900 mr-[18%]">
          Archaeology and Anthropology
        </h1>
      </section>
      <section className="mx-auto container px-4">
        <ul className="flex divide-x divide-gray-300 flex-wrap">
          {tabs.map(tab => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-lg font-medium ${
                activeTab.id === tab.id
                  ? "bg-gray-300"
                  : "hover:underline text-emerald-500 cursor-pointer"
              }`}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </section>
      {tabComponents[activeTab.id as keyof typeof tabComponents]}
    </div>
  );
};

export default Course;
