import { Image, Laugh, X } from "lucide-react";
import { AiOutlineGif } from "react-icons/ai";
import { FaUserTag } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export function CreatePost() {

    const userName = localStorage.getItem('fullname')

    return (
        < >

            <div className=" bg-gray-200 flex justify-center p-5">
                <div className=" bg-white rounded-md w-140  px-3 py-3 grid gap-2">

                    <div className="flex justify-center  relative items-center px-2  ">
                        <p className=" text-[18px] font-medium">Create Post</p>
                        <X className="bg-gray-300 rounded-full p-1 w-8 h-8 absolute right-2" />
                    </div>
                    <hr className="my-2" />
                    <div className="flex    gap-3">
                        <img alt="profile picture" className="border w-10 h-10 rounded-full " />
                        <h2 className="font-medium text-lg">{userName}</h2>
                    </div>
                    <div>
                        <textarea placeholder={`What's on your mind, ${userName} ?`} className=" resize-none min-w-full h-50 border-none focus:outline-0 text-2xl   " name="" id=""></textarea>

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
                        <button className=" bg-[rgb(8,102,255)] text-white text-md rounded-lg w-full p-1 py-1.5  ">
                            Post
                        </button>
                    </div>


                </div>
            </div>

        </>
    )
};