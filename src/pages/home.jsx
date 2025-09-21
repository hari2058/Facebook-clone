import { Bell, Bookmark, HomeIcon, MessageCircle, Search, TvMinimalPlay, UserRound, } from "lucide-react";

export function Home() {


    return (

        <>
            {/*main div   */}
            <div className="h-[56px] border-b-2 grid grid-cols-3 p-2 ">
                {/* logo and search bar div */}
                <div className="flex pl-5 items-center gap-2 ">
                    <img src="public/s.png" alt="Sociogram logo" className="h-[32.59px] rounded-full" />
                    <div className="relative">

                        <div className="absolute left-0 pl-3  flex justify-center  rounded-full  ">
                            <Search className="h-[32.59px] w-[16px] opacity-60 " />
                        </div>

                        <input type="text" placeholder="Search sociogram" className=" w-[224px] pl-10 pr-5 py-1 rounded-full focus:ring-2
                         placeholder-gray-600 focus:outline-none bg-[rgb(242,244,247)]  
                           focus:ring-[rgb(21,77,113)] "/>
                    </div>



                </div>

                {/* navbar middle icons div */}
                <div className="flex justify-between items-center">

                    <HomeIcon />
                    <TvMinimalPlay />
                    <Bookmark />
                    <UserRound />

                </div>
                {/* profile and notifications div */}
                <div className="flex justify-end gap-8 pr-5 items-center  ">
                    
                    <div className="bg-[rgb(218,222,228)] rounded-full w-10 h-10 flex items-center justify-center">
                        <Bell />

                    </div>
                    <div className="bg-[rgb(218,222,228)] rounded-full w-10 h-10 flex items-center justify-center">
                        <MessageCircle /> 
                    </div>
                   
                    <img src="" className=" border h-[40px] rounded-full w-[40px]" alt="profile picture" />


                </div>



            </div>

        </>
    )
}