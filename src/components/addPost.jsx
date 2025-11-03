import { Flag, Images, Video } from "lucide-react";
import { useState } from "react";
import { CreatePost } from "../pages/createPost";

export function AddPost() {
  const [isPostOpen, setIsPostOpen] = useState(false);

  const handleOpenPost = () => {
    setIsPostOpen(true);
  };

  const handleClosePost = () => {
    setIsPostOpen(false);
  };
  const userImage = localStorage.getItem("profileimage");

  return (
    <>
      <div className=" relative">
        <div className="flex   justify-center  p-2  ">
          <div className=" w-200 h-full  bg-white  rounded-lg  drop-shadow-xl">
            <div className="flex gap-3 items-center py-4 px-3 ">
              <div>
                <img
                  src={userImage}
                  className="border h-[39px] rounded-full w-[40px]"
                  alt="profile picture"
                />
              </div>
              <input
                onClick={handleOpenPost}
                type="text "
                placeholder="What's on your mind?"
                className="cursor-pointer px-3 bg-gray-200 rounded-2xl w-full h-10"
              />
            </div>
            <hr className="m-2 opacity-30" />
            <div className="flex justify-between p-2">
              <p className="px-10 py-2 gap-1 hover:bg-gray-200 hover:rounded-2xl flex font-medium">
                <Video className="text-red-600  " /> Live Video
              </p>

              <p className="flex py-2 px-10 gap-1  hover:bg-gray-200 hover:rounded-2xl font-medium">
                <Images className="text-green-500" />
                photo/video
              </p>

              <p className="flex py-2 px-10 gap-1 hover:bg-gray-200 hover:rounded-2xl font-medium">
                <Flag className="text-blue-700" /> Life event
              </p>
            </div>
          </div>
        </div>
        <div className=" absolute top-0 z-10">
          <CreatePost isOpen={isPostOpen} onClose={handleClosePost} />
        </div>
      </div>
    </>
  );
}
