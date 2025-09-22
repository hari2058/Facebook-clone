import { Bookmark, MoreHorizontal, X } from "lucide-react";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";

export const Post = () => {
  const userName = localStorage.getItem("fullname");
  const postData = localStorage.getItem("postdata");

  return (
    <>
      <div className="flex justify-center p-2">
        <div className="w-200 h-full  bg-white p-2  rounded-lg  drop-shadow-xl">
          <div className="flex justify-between p-2">
            <div className="flex gap-2">
              <img alt="profile" className="w-10 h-10 rounded-full border " />
              <h3 className="text-lg font-medium">{userName}</h3>
            </div>
            <div className="flex gap-2">
              <MoreHorizontal />
              <X />
            </div>
          </div>
          <div>
            <p className="text-lg ">{postData}</p>
          </div>
          <hr />
          <div className="flex  gap-2 justify-between px-4 py-2 ">
            <span className="flex gap-2 justify-between items-center hover:bg-gray-200  hover:rounded-2xl px-8 py-1">
              <BiLike className="w-6 h-6" />
              Like
            </span>

            <span className="flex gap-2 justify-between items-center hover:bg-gray-200  hover:rounded-2xl px-8 py-1">
              <FaRegComment className="w-6 h-6" />
              comment
            </span>

            <span className="flex justify-between items-center hover:bg-gray-200  hover:rounded-2xl px-8 py-1 gap-2 ">
              <Bookmark />
              Save
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
