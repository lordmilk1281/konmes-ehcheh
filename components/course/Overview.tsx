import React from "react";

type Props = {};

const Overview = (props: Props) => {
  return (
    <div className="container px-4 mx-auto space-y-5">
      <section className="bg-gray-100 rounded-lg p-4 max-w-2xl">
        <table>
          <tbody>
            <tr>
              <Cell name="UCAS code" value="LV64" />
              <Cell name="Duration" value="3 years (BA)" />
            </tr>
            <tr>
              <Cell name="Entrance requirements" value="AAA" />
              <Cell
                name="Subject requirements"
                value={"Combination of arts and science subjects"}
              />
            </tr>
            <tr>
              <Cell name="Admissions test(s)" value="None" />
              <Cell name="Written work" value="Two pieces" />
            </tr>
            <tr>
              <Cell
                name="Admissions statistics*"
                value="Interviewed: 65%
                      Successful: 19%
                      Intake: 22
                      *3-year average 2020-22"
              />
              <Cell
                name="Contact"
                value="	
                      +44 (0) 1865 278121
                      ugsupport@arch.ox.ac.uk"
              />
            </tr>
          </tbody>
        </table>
      </section>

      <section className="space-y-4 mr-[25%]">
        <h3 className="text-3xl font-semibold">About the course</h3>
        <p className="font-medium text-gray-900">
          Archaeology and anthropology together encompass the study of humankind
          from the origins of the human species to the present day.
        </p>
        <p className="font-medium text-gray-900">
          Both disciplines have a long history: archaeology grew from
          18th-century antiquarianism, while anthropology began even earlier in
          the first days of colonial encounter.
        </p>
        <p className="font-medium text-gray-900">
          Today, both subjects involve a range of sophisticated approaches
          shared with the arts, social sciences and physical sciences.
        </p>
      </section>
    </div>
  );
};

export default Overview;

type CellProps = {
  name: string;
  value: React.ReactNode;
};

const Cell = ({ name, value }: CellProps) => {
  return (
    <>
      <td className="p-2 align-top">•</td>
      <td className="font-bold text-gray-900 p-2 align-top">{name}</td>
      <td className="p-2 w-60 align-top">{value}</td>
    </>
  );
};
