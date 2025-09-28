import { Camera, CameraIcon, Pen, Plus } from "lucide-react";
import { NavBar } from "../components/navbar";
import { useEffect, useState } from "react";
import { CreatePost } from "./createPost";
import { CgProfile } from "react-icons/cg";

export function Profile() {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleOpenPost = () => {
    setIsPostOpen(true);
  };

  const handleClosePost = () => {
    setIsPostOpen(false);
  };

  const userName = localStorage.getItem("fullname");
  console.log({ userName });

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

const  userImage = localStorage.getItem('profileimage');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("profileimage", reader.result); // save in localStorage
        setProfileImage(reader.result); // update state immediately
      };
      reader.readAsDataURL(file); // convert file → base64
    }
  };

  return (
    <>
      <NavBar />

      <div className="relative">
        <div className=" mx-auto max-w-4xl  px-4 ">
          <div className="  h-70 bg-no-repeat  bg-[url(https://timelinecovers.pro/facebook-cover/download/life-facebook-cover.jpg)] ">
            <div className="pt-53 px-8 flex justify-between">
              <div className="relative flex  items-center gap-4">
                <img
                  className="w-50 h-50   rounded-full border-4 border-white"
                  src={userImage}
                  alt="profile picture"
                />

                <div>
                  <label for="file-input">
                    <Camera className=" cursor-pointer bg-white absolute left-39 top-35  w-10 h-10 border-4 border-white rounded-full " />
                  </label>
                  <input
                    id="profileImage"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-10 h-10 absolute left-39 top-35  opacity-0 cursor-pointer "
                  />
                </div>

                <p className="text-3xl font-extrabold "> {userName}</p>
              </div>

              <div className=" flex flex-col gap-10 w-80">
                <div className="flex justify-end ">
                  <p className="flex border-white border-4 cursor-pointer bg-white gap-3 p-1 rounded-xl">
                    <CameraIcon /> Edit cover photo
                  </p>
                </div>

                <div className="flex gap-5 ">
                  <button
                    onClick={handleOpenPost}
                    className="flex w-full cursor-pointer gap-3 bg-blue-600 text-white px-3 py-1  rounded-md font-bold"
                  >
                    <Plus />
                    Add a post
                  </button>

                  <p className="flex gap-2 w-full bg-gray-300 rounded-md px-2 py-1 cursor-pointer items-center ">
                    <Pen className="h-5" />
                    Edit Profile
                  </p>
                </div>
              </div>
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
