import React from 'react'
// import Img from '../Assats/Vrushabh.jpg'

const Team_Section = () => {
    return (
        <>
            <div>
                <div className="flex items-center justify-center text-center bg-no-repeat bg-cover h-full md:bg-center bg-slate-50">
                    <div className="flex flex-col p-2 m-2 max-w-7xl ">
                        <div className="text-4xl font-bold my-7">&diams; SKILLS &diams;</div>
                        {
                            //     <div className="text-sm lg:mx-36 md:mx-28 md:text-xl text-stone-700">
                            // Success begins with someone's efforts and hard work. If a person has a goal and does not try to fulfil his goal, then he can never achieve success.  
                            // </div>
                        }

                        <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">
                            <div className="flex-col py-2 ">
                                <div className="h-60 w-60 rounded-2xl overflow-hidden bg-gray-200">
                                    <img
                                        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png`}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    Javascript (Nodejs)
                                </div>
                                <div className=" italic text-gray-500">Programming Languages</div>
                            </div>

                            <div className="flex-col py-2">
                                <div className="h-60 w-60 rounded-2xl overflow-hidden bg-black">
                                    <img
                                        src={`https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg`}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    Express.js
                                </div>
                                <div className=" italic text-gray-500">Web Technologies</div>
                            </div>
                            <div className="flex-col py-2">
                                <div className="h-60 w-60 rounded-2xl overflow-hidden bg-gray-200">
                                    <img
                                        src={`https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png`}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    Nest.js
                                </div>
                                <div className=" italic text-gray-500">Web Technologies</div>
                            </div>
                        </div>


                        <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">
                            <div className="flex-col py-2 ">
                                <div className="h-60 w-60 rounded-2xl overflow-hidden bg-black pt-10">
                                    <img
                                        src={`https://blog.logrocket.com/wp-content/uploads/2021/10/web3-js-ethereum-blockchain-tutorial.png`}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    Web3.js RESTful APIs
                                </div>
                                <div className=" italic text-gray-500">Web Technologies</div>
                            </div>

                            <div className="flex-col py-2">
                                <div className="h-60 w-60 rounded-2xl overflow-hidden bg-black py-3">
                                    <img
                                        src={`https://images.ctfassets.net/23aumh6u8s0i/6wTbGkTM3EBoO6hytvOcXj/d0144f86227382219fd2c8f4f53499c6/illustration`}
                                        alt=""
                                        className=""

                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    MongoDB
                                </div>
                                <div className=" italic text-gray-500">Database</div>
                            </div>
                            <div className="flex-col py-2">
                                <div className="h-60 w-60 rounded-2xl overflow-hidden bg-gray-200">
                                    <img
                                        src={`https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/6f6d6101-68b4-4c53-d405-71f5de512f00/preview`}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    MySQL
                                </div>
                                <div className=" italic text-gray-500">Database</div>
                            </div>
                        </div>





                        <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">
                            <div className="flex-col py-2 ">
                                <div className="h-60 w-60 rounded-2xl overflow-hidden bg-black py-12">
                                    <img
                                        src={`https://miro.medium.com/v2/resize:fit:1400/1*-Yj3HpcmEuO7brKrfrdhOA.png`}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    Git
                                </div>
                                <div className=" italic text-gray-500">Version Control</div>
                            </div>

                            <div className="flex-col py-2">
                                <div className="h-60 w-60 rounded-2xl overflow-hidden bg-black">
                                    <img
                                        src={`https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg`}
                                        alt=""
                                        className=""

                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    GitHub
                                </div>
                                <div className=" italic text-gray-500">Version Control</div>
                            </div>
                            <div className="flex-col py-2">
                                <div className="h-60 w-60 rounded-2xl overflow-hidden bg-black py-4 px-2">
                                    <img
                                        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgKYGZEQAYqZ0pgC6kvLGpWFvsPNQ5cLSjQ&usqp=CAU`}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                                    Docker
                                </div>
                                <div className=" italic text-gray-500">Tool</div>
                            </div>
                        </div>




                    </div>
                </div>

            </div>
        </>
    )
}

export default Team_Section
