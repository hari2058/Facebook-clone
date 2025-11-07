import {
  Bell,
  Bookmark,
  HomeIcon,
  MessageCircle,
  Search,
  TvMinimalPlay,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

export function NavBar() {
  const getActive = () => {
    if (location.pathname === "/content") return "content";
    if (location.pathname === "/bookmark") return "bookmark";
    if (location.pathname === "/home") return "home";
    if (location.pathname === "/userround") return "userround";
  };

  const isActive = getActive();
  const userImage = localStorage.getItem("profileimage");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*main div   */}
      <div className="h-[56px]  grid grid-cols-3 p-2  bg-[rgb(242,244,247)]">
        {/* logo and search bar div */}
        <div className="flex pl-5 items-center gap-2 ">
          <Link to="/home">
            <img
              src="/s.png"
              alt="Sociogram logo"
              className="h-[32.59px] rounded-full"
            />
          </Link>
          <div className=" hidden md:grid relative">
            <div className="absolute left-0 pl-3  flex justify-center  rounded-full  ">
              <Search className="h-[32.59px] w-[16px] opacity-60 " />
            </div>

            <input
              type="text"
              placeholder="Search sociogram"
              className=" w-[224px] pl-10 pr-5 py-1 rounded-full focus:ring-2
                         placeholder-gray-600 focus:outline-none bg-white ]  
                           focus:ring-[rgb(21,77,113)] "
            />
          </div>
        </div>

        {/* navbar middle icons div */}
        <div className=" hidden md:flex md:justify-between md:items-center ">
          <Link to="/home">
            <HomeIcon
              className={` ${isActive === "home" ? "text-blue-600  " : ""}`}
            />
          </Link>

          <Link to="/content">
            <TvMinimalPlay
              className={` ${isActive === "content" ? "text-blue-600  " : ""}`}
            />
          </Link>

          <Link to="/bookmark">
            <Bookmark
              className={`text-black ${
                isActive === "bookmark" ? "text-blue-600" : ""
              }`}
            />
          </Link>

          <Link to="/userround">
            <UsersRound
              className={`text-black ${
                isActive === "userround" ? "text-blue-600" : ""
              }`}
            />
          </Link>
        </div>
        {/* profile and notifications div */}
        <div className="flex justify-end gap-8 pr-5 items-center  ">
          <div className="bg-[rgb(218,222,228)] rounded-full w-10 h-10 flex items-center justify-center">
            <Bell />
          </div>
          <div className="bg-[rgb(218,222,228)] rounded-full w-10 h-10 flex items-center justify-center">
            <MessageCircle />
          </div>

          <Link to="/profile">
            <img
              src={userImage}
              className=" border h-[40px] rounded-full w-[40px]"
              alt="profile picture"
            />
          </Link>
        </div>

        <div className="md:hidden grid justify-items-end col-start-3 p-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <RxCrossCircled className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden p-5 bg-[rgb(226,228,231)] border-2 rounded-2xl">
          <div className="  flex justify-between items-center ">
            <Link to="/home">
              <HomeIcon
                className={` ${isActive === "home" ? "text-blue-600  " : ""}`}
              />
            </Link>

            <Link to="/content">
              <TvMinimalPlay
                className={` ${
                  isActive === "content" ? "text-blue-600  " : ""
                }`}
              />
            </Link>

            <Link to="/bookmark">
              <Bookmark
                className={`text-black ${
                  isActive === "bookmark" ? "text-blue-600" : ""
                }`}
              />
            </Link>

            <Link to="/userround">
              <UsersRound
                className={`text-black ${
                  isActive === "userround" ? "text-blue-600" : ""
                }`}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
