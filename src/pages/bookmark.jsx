import { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import { MoreHorizontal, X, Bookmark } from "lucide-react";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export function BookMark() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const bookmarkData = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(bookmarkData);
  }, []);

  // handle Like function
  const handleLike = (postID) => {
    const updatedBookmarks = bookmarks.map((post) =>
      post.id === postID ? { ...post, liked: !post.liked } : post
    );
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  // handle  Delete bookmark
  const handleDelete = (postID) => {
    const updatedBookmarks = bookmarks.filter((post) => post.id !== postID);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    // alert("Bookmark deleted.");
    toast.error("Unmarked", { duration: 1000 });
  };
const userImage = localStorage.getItem("profileimage");


  return (
    <>
    <Toaster 
    position="top-center"
    />
      <NavBar />
      <div className="flex flex-col gap-5 justify-center items-center p-2">
        {bookmarks.length === 0 && (
          <p className="text-gray-500 flex justify-center text-3xl">
            No bookmarks yet.
          </p>
        )}
        {bookmarks.map((bookmarkData) => (
          <div
            key={bookmarkData.id}
            className="w-200 h-full flex-1 bg-white p-2 rounded-lg drop-shadow-xl"
          >
            <div>
              <div className="flex justify-between p-2">
                <div className="flex gap-2">
                  <img
                  src={userImage}
                    alt="profile"
                    className="w-10 h-10 rounded-full border"
                  />
                  <h3 className="text-lg font-medium">Hari Bhandari</h3>
                </div>
                <div className="flex gap-2">
                  <MoreHorizontal />
                  <X
                    onClick={() => handleDelete(bookmarkData.id)}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <p className="text-lg">{bookmarkData.text}</p>
                {bookmarkData.image && (
                  <div className="flex justify-center pb-4">
                    <img
                      src={bookmarkData.image}
                      alt="post"
                      className="p-2 rounded-lg max-h-60 object-cover"
                    />
                  </div>
                )}
              </div>

              <hr />

              <div className="flex gap-2 justify-between px-4 py-2">
                <span
                  className={`flex gap-2 items-center hover:bg-gray-200 cursor-pointer hover:rounded-2xl px-8 py-1 ${
                    bookmarkData.liked
                      ? "text-[rgb(8,102,255)] font-semibold"
                      : ""
                  }`}
                  onClick={() => handleLike(bookmarkData.id)}
                >
                  <BiLike className="w-6 h-6" />
                  {bookmarkData.liked ? "Unlike" : "Like"}
                </span>

                <span className="flex gap-2 items-center hover:bg-gray-200 hover:rounded-2xl px-8 py-1">
                  <FaRegComment className="w-6 h-6" />
                  Comment
                </span>

                <span className="flex gap-2 items-center hover:bg-gray-200 cursor-pointer hover:rounded-2xl px-8 py-1">
                  <Bookmark />
                  Saved
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
