import React from 'react'
import Img from '../Assats/Vrushabh.jpg'

const Team_Section = () => {
    return (
        <>
            <div>
                <div className="flex items-center justify-center text-center bg-no-repeat bg-cover h-full md:bg-center">
                    <div className="flex flex-col p-2 m-2 max-w-7xl ">
                        <div className="text-xl md:text-3xl font-medium my-10">Meet Our Team</div>
                        <div className="text-sm lg:mx-36 md:mx-28 md:text-xl text-stone-700">
                        Success begins with someone's efforts and hard work. If a person has a goal and does not try to fulfil his goal, then he can never achieve success.  
                        </div>
                        
                        <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">
                            <div className="flex-col px-6 py-2 ">
                                <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                                    <img
                                        src={Img}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    Vrushabh Satasiya
                                </div>
                                <div className=" italic text-gray-500">Partner</div>
                            </div>
                            <div className="flex-col px-6 py-2 ">
                                <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                                    <img
                                        src="https://source.unsplash.com/300x300/?boy"
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    Arkay
                                </div>
                                <div className=" italic text-gray-500">Executive Producer</div>
                            </div>
                            <div className="flex-col px-6 py-2 ">
                                <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                                    <img
                                        src="https://source.unsplash.com/300x300/?girl"
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    Elina Gilbert
                                </div>
                                <div className=" italic text-gray-500">HR</div>
                            </div>
                        </div>
                        {
                        //     <div className="flex space-x-4 space-y-2 p-2 items-center justify-center md:flex-row flex-col ">
                        //     <div className="flex-col px-6 py-2 ">
                        //         <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                        //             <img
                        //                 src="https://source.unsplash.com/300x300/?kid"
                        //                 alt=""
                        //                 className=""
                        //             />
                        //         </div>
                        //         <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                        //             Clay Johnson
                        //         </div>
                        //         <div className=" italic text-gray-500">Manager</div>
                        //     </div>
                        //     <div className="flex-col px-6 py-2 ">
                        //         <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                        //             <img
                        //                 src="https://source.unsplash.com/300x300/?girl,woman"
                        //                 alt=""
                        //                 className=""
                        //             />
                        //         </div>
                        //         <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                        //             Hannah Saw
                        //         </div>
                        //         <div className=" italic text-gray-500">Marketing Producer</div>
                        //     </div>
                        //     <div className="flex-col px-6 py-2 ">
                        //         <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                        //             <img
                        //                 src="https://source.unsplash.com/300x300/?woman"
                        //                 alt=""
                        //                 className=""
                        //             />
                        //         </div>
                        //         <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                        //             Wednesday Addams
                        //         </div>
                        //         <div className=" italic text-gray-500">Financer</div>
                        //     </div>
                        // </div>
                    }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Team_Section
