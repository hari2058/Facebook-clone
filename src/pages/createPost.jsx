import { Image, X } from "lucide-react";

export function CreatePost() {

    const userName = localStorage.getItem('fullname')

    return (
        < >

            <div className=" bg-gray-200 flex justify-center p-5">
                <div className=" bg-white rounded-md w-200 grid gap-2">

                    <div className="flex justify-center  relative items-center px-2 py-3 ">
                        <p className=" text-[18px] font-medium">Create Post</p>
                        <X className="bg-gray-300 rounded-full p-1 w-8 h-8 absolute right-2" />
                    </div>
                    <hr className="my-2" />
                    <div className="flex px-4   gap-3">
                        <img alt="profile picture" className="border w-10 h-10 rounded-full " />
                        <h2 className="font-medium text-lg">{userName}</h2>
                    </div>
                    <div>
                        <textarea placeholder={`What's on your mind, ${userName} ?`} className=" resize-none min-w-full h-50 border-none focus:outline-0 text-2xl px-4  " name="" id=""></textarea>

                    </div>
                    <div className=" flex gap-2 border mx-4 px-3 py-2 rounded-md ">
                        <p>Add to your post</p>
                        <Image className="text-green-600 " />
                        
                    </div>


                </div>
            </div>

        </>
    )
};