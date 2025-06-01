import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Global/Sidebar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import useInternetConnectivity from "../hooks/checkInternetConnection";

const DashboardLayout = ({ page, pageName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOnline } = useInternetConnectivity();

  return (
    <div className="w-full flex">
      <div className="w-[17%] fixed top-0 left-0 h-screen z-40 bg-white">
        <Sidebar />
      </div>
      <div className="ml-[17%] w-[83%] min-h-screen bg-neutral-100 p-10">
        {!isOnline ? (
          <div className="w-full pt-10 text-center">
            <p className="text-xl text-red-600">No internet!</p>
          </div>
        ) : (
          <>
            <div className="w-full mb-10 flex items-center justify-between">
              <div className="w-full flex gap-1 items-center">
                <Link to={"/dashboard"} className="secondary-text text-sm">
                  Admin
                </Link>
                <MdKeyboardArrowRight className="text-base secondary-text" />
                {location?.pathname !== "/" && (
                  <Link
                    to={location?.pathname}
                    className="outline-none text-sm"
                  >
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
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
