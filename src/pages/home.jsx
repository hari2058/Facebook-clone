import { Search } from "lucide-react";

export function Home() {


    return (

        <>
            {/*main div   */}
            <div className="h-[56px] border-b-2 flex justify-between p-2 ">
                {/* logo and search bar div */}
                <div className="flex justify-center items-center gap-2 ">
                    <img src="public/s.png" alt="Sociogram logo" className="h-[32.59px] rounded-full" />
                    <div className="relative">

                        <div className="absolute left-0 pl-3  flex justify-center  rounded-full  ">
                            <Search className="h-[32.59px] w-[16px] opacity-60 " />
                        </div>

                        <input type="text" placeholder="Search sociogram" className="w-[224px] pl-10 pr-5 py-1 rounded-full focus:ring-2
                         placeholder-gray-600 focus:outline-none bg-[rgb(242,244,247)]  
                           focus:ring-[rgb(21,77,113)] "/>
                    </div>
                    
                    

                </div>

                {/* navbar middle icons div */}
                <div>


                </div>
                {/* profile and notifications div */}
                <div>


                </div>



            </div>

        </>
    )
}