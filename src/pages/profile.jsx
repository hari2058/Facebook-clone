import { Camera, CameraIcon, Pen, Plus } from "lucide-react";
import {Link, useNavigate} from "react-router-dom"
import { NavBar } from "../components/navbar";

export function Profile() {

const navigate = useNavigate();

    const userName = localStorage.getItem('fullname' );
    console.log({userName})
    return (
        <>
            <NavBar />

            <div className="mx-auto max-w-4xl  px-4 ">
                <div className="  h-70 bg-no-repeat  bg-[url(https://timelinecovers.pro/facebook-cover/download/life-facebook-cover.jpg)] ">

                    <div className="pt-53 px-8 flex justify-between">
                        <div className="relative flex  items-center gap-4">
                            <img className="w-50 h-50   rounded-full border-4 border-white"
                                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile picture" />

                            <div>
                                <Camera className="  bg-white absolute left-39 top-35  w-10 h-10 border-4 border-white rounded-full " />
                            </div>

                            <p className="text-3xl font-extrabold "> {userName}</p>
                            
                        </div>

                        <div className=" flex flex-col gap-10 w-80">
                           <div className="flex justify-end ">
                                <p className="flex border-white border-4 bg-white gap-3 p-1 rounded-xl">
                                    <CameraIcon /> Edit cover photo
                                </p>
                           </div>
                               
                          
                            <div className="flex gap-5 ">
                                
                            
                                    <button 
                                    onClick={() => navigate("/addPost")} className="flex w-full  gap-3 bg-blue-600 text-white px-3 py-1  rounded-md font-bold">
                                        <Plus />Add a post </button>
                                
                                   
                                
                              

                                <p className="flex gap-2 w-full bg-gray-300 rounded-md px-2 py-1 items-center "> <Pen className="h-5" />Edit Profile</p>
                            </div>

                            
                        </div>

                    </div>







                </div>
            </div>

        </>
    )
}