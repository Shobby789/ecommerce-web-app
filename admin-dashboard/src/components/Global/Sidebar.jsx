import { Link, useLocation } from "react-router-dom";
import { SIDEBAR_LINKS } from "../../constants/SidebarLinks";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full py-10 px-10 sticky inset-0">
      <div className="w-full flex items-center justify-center gap-2">
        <img
          src={"/logo.svg"}
          alt="logo"
          width={16}
          height={26}
          className="object-contain"
        />
        <p className="text-[20px] font-extrabold">
          <strong>Admin</strong>
        </p>
      </div>
      <ul className="w-full mt-10 flex flex-col items-start gap-1">
        {SIDEBAR_LINKS?.map((l, i) => {
          return (
            <li
              className={`w-full p-3.5 ${
                pathname === l?.url && "bg-neutral-100"
              } hover:bg-neutral-100 rounded-lg transition-all duration-300`}
              key={i}
            >
              <Link
                to={l?.url}
                className="flex items-center gap-3 text-[#5C5F6A] outline-none"
              >
                <img
                  src={l?.icon}
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <span className="text-sm font-medium">{l?.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
