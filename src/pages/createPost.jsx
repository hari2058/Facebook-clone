import { Image, Laugh, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { AiOutlineGif } from "react-icons/ai";
import { FaUserTag } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export const CreatePost = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();

  if (!isOpen) return null;

  const userName = localStorage.getItem("fullname");

  const onSubmit = (data) => {
    localStorage.setItem("postdata", data.postCreated);
console.log(data);
    alert("Posted Successfully.");
  };

  return (
    <>
      <div className=" bg-gray-500/30 min-h-screen min-w-screen grid justify-center items-center">
        <div className=" bg-white max-h-120 rounded-md w-140  ">
          <form
            className=" px-3 py-3 grid gap-2"
            action="submit"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-center  relative items-center px-2  ">
              <p className=" text-[18px] font-medium">Create Post</p>
              <X
                onClick={onClose}
                className="bg-gray-300 rounded-full p-1 w-8 h-8 absolute right-2"
              />
            </div>
            <hr className="my-2" />
            <div className="flex    gap-3">
              <img
                alt="profile picture"
                className="border w-10 h-10 rounded-full "
              />
              <h2 className="font-medium text-lg">{userName}</h2>
            </div>
            <div>
              <textarea
              {...register('postCreated')}
                type="text"
                name="postCreated"
                placeholder={`What's on your mind, ${userName} ?`}
                className=" resize-none min-w-full h-50 border-none focus:outline-0 text-2xl   "
              ></textarea>
            </div>
            <div className=" flex justify-between gap-2 border  px-3 py-2 rounded-md ">
              <div>
                <p>Add to your post</p>
              </div>

              <div className="flex gap-3 px-2">
                <Image className="text-green-600 " />
                <FaUserTag className=" h-6 w-6 text-blue-700 " />
                <Laugh className="text-yellow-500 " />
                <IoLocationSharp className=" h-6 w-6 text-red-600 " />
                <AiOutlineGif className=" h-6 w-6 text-white bg-green-700 rounded-lg  " />
                <IoIosMore className=" h-6 w-6 " />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" bg-[rgb(8,102,255)] text-white text-md rounded-lg w-full p-1 py-1.5  "
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
