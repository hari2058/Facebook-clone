


import { Camera, CameraIcon, Pen, Plus } from "lucide-react";
import { NavBar } from "../components/navbar";
import { useEffect, useState } from "react";
import { CreatePost } from "./createPost";
import { CgProfile } from "react-icons/cg";

export function Profile() {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const userName = localStorage.getItem("fullname") || "User";

  useEffect(() => {
    const savedImage = localStorage.getItem("profileimage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleOpenPost = () => setIsPostOpen(true);
  const handleClosePost = () => setIsPostOpen(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("profileimage", reader.result);
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <NavBar />

      <div className="relative">
        <div className="mx-auto max-w-4xl px-4">
          <div className="h-70  bg-no-repeat bg-[url('https://timelinecovers.pro/facebook-cover/download/life-facebook-cover.jpg')] bg-cover bg-center">
            <div className="pt-48 px-8   flex justify-between">
              <div className="relative flex items-center mt-8 gap-4">
                {profileImage ? (
                  <img
                    className="w-48 h-48 rounded-full border-4 border-white object-cover"
                    src={profileImage}
                    alt="profile"
                  />
                ) : (
                  <CgProfile className="w-48 h-48 text-gray-400 bg-white rounded-full border-4 border-white" />
                )}

                {/* Profile Picture Upload */}
                <label htmlFor="profileImage">
                  <Camera className="cursor-pointer bg-white absolute left-[140px] top-[145px] w-10 h-10 border-4 border-white rounded-full p-1" />
                </label>
                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

                <p className="text-3xl font-extrabold">{userName}</p>
              </div>

              <div className="flex flex-col gap-10 w-80 mt-8">
                <div className="flex justify-end">
                  <p className="flex border-white border-4 cursor-pointer bg-white gap-3 p-1 rounded-xl items-center">
                    <CameraIcon /> Edit cover photo
                  </p>
                </div>

                <div className="flex gap-5">
                  <button
                    onClick={handleOpenPost}
                    className="flex w-full cursor-pointer gap-3 bg-blue-600 text-white px-3 py-1 rounded-md font-bold items-center justify-center"
                  >
                    <Plus /> Add a post
                  </button>

                  <p className="flex gap-2 w-full bg-gray-300 rounded-md px-2 py-1 cursor-pointer items-center justify-center">
                    <Pen className="h-5" /> Edit Profile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Create Post Modal */}
        {isPostOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <CreatePost isOpen={isPostOpen} onClose={handleClosePost} />
          </div>
        )}
      </div>
    </>
  );
}
