import { Toaster } from "react-hot-toast";
import { AddPost } from "../components/addPost";
import { NavBar } from "../components/navbar";
import { Post } from "./post";

export function Home() {
  return (
    <>
    <Toaster />
      <NavBar />

      <div className="bg-gray-200 min-h-screen justify-center">
        <AddPost />
        <Post />
      </div>
    </>
  );
}
