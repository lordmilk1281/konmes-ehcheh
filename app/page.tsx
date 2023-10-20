import CalendarCard from "@/components/cards/CalendarCard";
import StatBox from "@/components/home/StatBox";

export default function Home() {
  return (
    <div>
      <section
        style={{ height: "calc(100vh - 74px)" }}
        className="bg-emerald-300 flex justify-center items-end"
      >
        <StatBox />
      </section>
      <section className="my-12 space-y-6 mx-auto container">
        <h2 className="font-bold text-2xl lg:text-4xl text-gray-700">
          Upcoming
        </h2>
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
