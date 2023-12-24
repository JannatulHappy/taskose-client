import { useState } from "react";
import { FaHome, FaTasks } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {
  IoIosArrowDown,
  IoIosSearch,
  IoMdMenu,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { MdHomeFilled, MdOutlineMessage } from "react-icons/md";
import toast from "react-hot-toast";
import MenuItem from "../components/MenuItem/MenuItem";
import CreateTask from "../components/CreateTask/CreateTask";
import useUserTask from "../hooks/useUserTask";
import logo from "../assets/Screenshot_2-removebg-preview.png";
import { BiCategory } from "react-icons/bi";
const DashboardLayout = () => {
  const [sidebar, setSidebar] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const { refetch } = useUserTask();
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logout Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="bg-[#f1f5fb] dark:bg-gray-800 min-h-screen">
        <div className="body-content">
          {/* nav item */}
          <div className="relative lg:block navbar-menu">
            <nav
              className={`fixed ${
                !sidebar ? "hidden lg:fixed" : ""
              } top-0 transition-all lg:mt-0 mt-16 left-0 bottom-0 flex flex-col dark:bg-gray-900 w-[280px] bg-gray-800 overflow-hidden z-50`}
              id="sidenav"
            >
              <Link
                to="/"
                className="flex gap-2 px-5 py-3 text-xl font-bold text-blue-400"
              >
                <span className="pt-0.5 text-3xl">
                  <FaTasks></FaTasks>
                </span>
                <span className="text-2xl uppercase"> Taskose</span>
              </Link>
              <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                <div className="">
                  <button
                    type="button"
                    onClick={openModal}
                    className="flex items-center justify-center w-full px-6 py-4 text-xl text-gray-300 border border-yellow-500 rounded dark:text-gray-100 dark:hover:bg-gray-500 hover:text-white hover:bg-gray-900"
                  >
                    Create Task
                  </button>
                </div>
                <p className="px-6 py-4 text-lg text-gray-300">Dashboard</p>
                <ul className="mb-8 text-sm">
                  <li>
                    <MenuItem
                      address="/dashboard"
                      icon={MdHomeFilled}
                      label="Home"
                    ></MenuItem>
                  </li>
                  
                
                </ul>
               
              </div>
            </nav>
          </div>

          <div
            className={`mx-auto transition-all ${
              sidebar ? "lg:ml-[280px]" : ""
            } content-wrapper`}
            id="dash"
          >
            {/* navbar */}
            <div className="sticky top-0 z-40 px-3 py-3 bg-white shadow dark:bg-gray-900 lg:px-5">
              <nav className="relative">
                <div className="flex items-center justify-between">
                  <div className="items-center mr-auto lg:flex">
                    <button
                      onClick={() => setSidebar(!sidebar)}
                      className="px-2 py-2 text-blue-500 bg-blue-100 rounded dark:bg-gray-800 dark:text-gray-400"
                    >
                      <IoMdMenu className="text-[22px]" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-4 ">
                      <span className="cursor-pointer">
                        <MdOutlineMessage className="text-2xl text-gray-400" />
                      </span>
                    </div>
                    <div className="mr-4 cursor-pointer">
                      <IoIosSearch className="text-2xl text-gray-400" />
                    </div>
                    <div className="relative mr-4 cursor-pointer">
                      <span>
                        {/* <div className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full">
                                    </div> */}
                        <IoMdNotificationsOutline className="text-2xl text-gray-400" />
                      </span>
                    </div>

                    {/* Profile Name and icon */}
                    <div className="relative text-left lg:inline-block">
                      <div className="lg:block">
                        <button
                          onClick={() => setProfileOpen(!profileOpen)}
                          className="flex items-center"
                        >
                          <div className="hidden mr-3 text-right md:block">
                            <p className="text-sm font-bold text-black dark:text-white">
                              {" "}
                              {user?.displayName}{" "}
                            </p>
                          </div>
                          <div className="mr-2">
                            <img
                              src={user?.photoURL}
                              className="object-cover object-right w-10 h-10 rounded-full"
                              alt="person"
                            />
                          </div>
                          <span>
                            <IoIosArrowDown className="text-gray-400" />
                          </span>
                        </button>
                      </div>

                      {/* dropdown_profile */}
                      <div
                        id="dropdown_profile"
                        className={`${
                          !profileOpen ? "hidden" : ""
                        } absolute right-0 w-48 mt-3 origin-top-right bg-white rounded shadow dark:bg-gray-700`}
                      >
                        <div className="py-1">
                          {/* Account Setting */}
                          <Link
                            to="/dashboard/profile"
                            className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                          >
                            <svg
                              className="mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="3"></circle>
                              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                            Account
                          </Link>

                          {/* Logout Button */}
                          <button
                            onClick={handleLogout}
                            className="flex w-full px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 hover:bg-gray-100"
                          >
                            <svg
                              className="mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                              <polyline points="16 17 21 12 16 7"></polyline>
                              <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            {/* Outlet */}
            <Outlet openModal={openModal} />
          </div>
        </div>
      </div>
      <CreateTask isOpen={isOpen} closeModal={closeModal} refetch={refetch} />
    </>
  );
};

export default DashboardLayout;
