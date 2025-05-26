import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Global/Sidebar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";

const DashboardLayout = ({ page, pageName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <div className="w-full flex">
      <div className="w-[17%] h-screen relative">
        <Sidebar />
      </div>
      <div className="w-[83%] min-h-screen bg-neutral-100 p-10">
        <div className="w-full mb-10 flex items-center justify-between">
          <div className="w-full flex gap-1 items-center">
            <Link to={"/dashboard"} className="secondary-text text-sm">
              Admin
            </Link>
            <MdKeyboardArrowRight className="text-base secondary-text" />
            {location?.pathname !== "/" && (
              <Link to={location?.pathname} className="outline-none text-sm">
                {pageName}
              </Link>
            )}
          </div>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-sm font-medium text-red-500 flex items-center gap-1"
          >
            <RiLogoutCircleLine className="text-lg" />
            Logout
          </button>
        </div>
        {page}
      </div>
    </div>
  );
};

export default DashboardLayout;
