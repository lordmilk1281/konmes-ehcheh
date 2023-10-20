import React from "react";
import ActivityIcon from "../icons/ActivityIcon";

type Props = {};

const StatBox = (props: Props) => {
  return (
    <div className="bg-white hidden md:flex px-8 xl:px-10 justify-evenly">
      <Column title="10,501" description="Graduated" />
      <Column title="321" description="Courses" />
      <Column title="500" description="Educated Teachers" />
      <Column title="50" description="Campus" />
    </div>
  );
};

export default StatBox;

type ColumnProps = {
  title: string;
  description: string;
};

const Column = ({ title, description }: ColumnProps) => {
  return (
    <div className="px-8 xl:px-10 py-6">
      <ActivityIcon className="text-gray-700" />
      <span className="text-5xl font-bold text-gray-700 block mt-5">{title}</span>
      <span className="font-semibold text-gray-400 mt-1 block">{description}</span>
    </div>
  );
};
