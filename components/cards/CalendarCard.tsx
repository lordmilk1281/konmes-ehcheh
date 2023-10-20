import React from "react";
import CalendarIcon from "../icons/CalendarIcon";

type Props = {
  description: string;
  date: string;
  number: number;
};

const CalendarCard = ({ date, number, description }: Props) => {
  return (
    <div className="bg-gray-100 rounded-lg flex divide-x divide-gray-200 py-4 group">
      <div className="flex items-center gap-x-3 px-8">
        <CalendarIcon className="w-10 h-10 group-hover:text-emerald-500" />
        <div className="text-center">
          <span className="text-2xl lg:text-5xl font-semibold group-hover:text-emerald-500">{number}</span>
          <span className="text-lg lg:text-2xl font-normal uppercase block group-hover:text-emerald-500">
            {date}
          </span>
        </div>
      </div>
      <p className="my-auto px-8 text-lg text-gray-700 group-hover:text-emerald-500">{description || "-"}</p>
    </div>
  );
};

export default CalendarCard;
