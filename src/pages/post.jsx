import { Bookmark, MoreHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Post = () => {
  const userName = localStorage.getItem("fullname");
  const location = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];

    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    if (location.state?.newPost) {
      setPosts((prev) => [location.state.newPost, ...prev]);

      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleDelete = (postID) => {
    const updatedPosts = posts.filter((post) => post.id !== postID);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    toast("Post Deleted.", { duration: 1500 });
    // alert("post deleted.");
  };

  const handleLike = (postID) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postID) {
        return { ...post, liked: !post.liked };
      }
      return post;
    });

    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handleBookmark = (post) => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const alreadyBookmarked = savedBookmarks.find((b) => b.id === post.id);

    let updatedBookmark;

    if (alreadyBookmarked) {
      updatedBookmark = savedBookmarks.filter((b) => b.id !== post.id);
      // alert("post removed from bookmarked.");
      toast.error("Post Unmarked", { duration: 1000 });
    } else {
      updatedBookmark = [post, ...savedBookmarks];
      toast.success("Bookmarked", { duration: 1000 });
    }

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmark));
    // alert("post bookmarked.");

    setPosts((save) =>
      save.map((p) =>
        p.id === post.id ? { ...p, bookmarked: !alreadyBookmarked } : p
      )
    );
  };
  const userImage = localStorage.getItem("profileimage");

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col gap-5 justify-center items-center p-2">
        {posts.length === 0 && (
          <p className="text-gray-500 flex justify-center text-3xl">
            No Posts Yet. Create One!
          </p>
        )}
        {posts.map((post) => (
          <div className="w-200 h-full  flex-1  bg-white  p-2  rounded-lg  drop-shadow-xl">
            <div key={post.id}>
              <div className="flex justify-between p-2">
                <div className="flex gap-2">
                  <img
                    src={userImage}
                    alt="profile"
                    className="w-10 h-10 rounded-full border "
                  />
                  <h3 className="text-lg font-medium">{userName}</h3>
                </div>
                <div className="flex gap-2">
                  <MoreHorizontal />
                  <X
                    onClick={() => handleDelete(post.id)}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <p className="text-lg ">{post.text}</p>

                <div className="flex justify-center pb-4 ">
                  {post.image && (
                    <img
                      src={post.image}
                      alt="post"
                      className=" items-center p-2 rounded-lg max-h-60 object-cover"
                    />
                  )}
                </div>
              </div>

              <hr />
              <div className="flex  gap-2 justify-between px-4 py-2 ">
                <span
                  className={`flex gap-2 justify-between items-center hover:bg-gray-200 cursor-pointer  hover:rounded-2xl px-8 py-1 ${
                    post.liked ? "text-[rgb(8,102,255)] font-semibold" : ""
                  }`}
                  onClick={() => handleLike(post.id)}
                >
                  <BiLike
                    fill={post.liked ? "currentColor" : ""}
                    className="w-6 h-6"
                  />
                  {post.liked ? "Unlike" : "Like"}
                </span>

                <span className="flex gap-2 justify-between items-center hover:bg-gray-200  hover:rounded-2xl px-8 py-1">
                  <FaRegComment className="w-6 h-6" />
                  comment
                </span>

                <span
                  onClick={() => handleBookmark(post)}
                  className={` flex justify-between items-center hover:bg-gray-200 cursor-pointer  hover:rounded-2xl px-8 py-1 gap-2 ${
                    post.bookmarked ? "text-green-500" : ""
                  }`}
                >
                  <Bookmark fill={post.bookmarked ? "currentColor" : "none "} />
                  {post.bookmarked ? "Unsave" : "Save"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
