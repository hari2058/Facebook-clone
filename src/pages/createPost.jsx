import { Image, Laugh, X } from "lucide-react";
import { useState } from "react";
import { AiOutlineGif } from "react-icons/ai";
import { FaUserTag } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const CreatePost = ({ isOpen, onClose }) => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [text, setText] = useState("");
  if (!isOpen) return null;

  const userName = localStorage.getItem("fullname");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const handlePostSubmit = (e) => {
    e.preventDefault();

    const oldPosts = JSON.parse(localStorage.getItem("posts")) || [];

    const newPost = {
      id: Date.now(),
      text,
      image,
    };

    localStorage.setItem("posts", JSON.stringify([newPost, ...oldPosts]));

    setText("");
    setImage(null);
    alert("post created successfully.");
    onClose();
    navigate("/home", { state: { newPost } });
  };

  return (
    <>
      <div className=" bg-gray-500/30 min-h-screen min-w-screen grid justify-center items-center">
        <div className=" bg-white  rounded-md w-140  ">
          <form className=" px-3 py-3 grid gap-2" onSubmit={handlePostSubmit}>
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
                onChange={(e) => setText(e.target.value)}
                type="text"
                value={text}
                name="postCreated"
                placeholder={`What's on your mind, ${userName} ?`}
                className=" resize-none min-w-full h-50 border-none focus:outline-0 text-2xl   "
              ></textarea>

              {image && (
                <div className="p-2 flex justify-center">
                  <img
                    src={image}
                    alt="preview"
                    className="w-full h-60 rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
            <div className=" flex justify-between gap-2 border  px-3 py-2 rounded-md ">
              <div>
                <p>Add to your post</p>
              </div>

              <div className="flex gap-3 px-2">
                <label className="relative">
                  <Image className="text-green-600 cursor-pointer " />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-5 h-5 hidden cursor-pointer  rounded-full absolute left-0 top-0 "
                  />
                </label>
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
