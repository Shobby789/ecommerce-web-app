import { STATS } from "../../constants/dashboardStats";

const Stats = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-5">
      {STATS?.map((s, i) => {
        const Icon = s?.icon;
        return (
          <div
            key={i}
            className="w-full bg-white border rounded-lg p-7 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-black rounded flex items-center justify-center">
              <Icon className="text-white w-16" />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-extrabold text-2xl">{s?.count}+</p>
              <p className="font-semibold secondary-text text-sm">{s?.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
