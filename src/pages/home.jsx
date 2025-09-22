import { AddPost } from "../components/addPost";
import { NavBar } from "../components/navbar";
import { Post } from "./post";

export function Home () {
    return(
        <>
        <NavBar />

<div className="bg-gray-200 min-h-screen justify-center">
     <AddPost />
        <Post />
</div>
       
        </>
    )
};