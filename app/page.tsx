import CalendarCard from "@/components/cards/CalendarCard";
import StatBox from "@/components/home/StatBox";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-emerald-300 h-screen sm:h-[50vh] flex justify-center items-end">
        <StatBox />
      </section>
      <section className="my-12 space-y-6 px-4 sm:px-0 mx-auto container">
        <div className="flex items-center justify-between sm:justify-normal gap-4 divide-x divide-gray-200">
          <h2 className="font-bold text-2xl lg:text-4xl text-gray-700">
            Upcoming Events
          </h2>
          <Link href="/" className="text-emerald-500 hover:underline px-2">All Events</Link>
        </div>
        <div className="space-y-4">
          <CalendarCard
            date="jun"
            description="Incididunt elit tempor voluptate ipsum."
            number={2}
          />
          <CalendarCard date="jun" description="" number={10} />
          <CalendarCard
            date="mar"
            description="Incididunt elit tempor voluptate ipsum."
            number={14}
          />
          <CalendarCard
            date="jun"
            description="Incididunt elit tempor voluptate ipsum."
            number={20}
          />
          <CalendarCard
            date="aug"
            description="Incididunt elit tempor voluptate ipsum."
            number={26}
          />
        </div>
      </section>
    </div>
  );
}
