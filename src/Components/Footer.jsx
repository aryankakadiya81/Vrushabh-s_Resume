import React from 'react'

const Footer = () => {
    return (
        <>
            <div>


                <div className=" p-4 items-center justify-center bg-slate-50">
                    <div className="flex justify-center pt-10 pb-14 md:pb-9"> <img className="w-2/5 md:w-[25%] lg:w-[18%] xl:w-[15%]" alt="" /> </div>
                    <div className="space-y-9 grid lg:flex lg:justify-between md:grid-cols-2 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">


                        <div className='pt-9'>
                            <div className="text-black text-[15px] font-[550] leading-6 tracking-wide mt-0 md:order-5 md:pt-0 lg:pb-28">
                                <div className="flex justify-start">
                                    <h1 className="text-black pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                        Soft Skills </h1>
                                </div>
                                <p>
                                    <p>&diams; Team Collaboration</p>
                                    <p>&diams; Problem Solving</p>
                                    <p>&diams; Communication</p>
                                    <p>&diams; Project management</p>

                                    

                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="text-black text-[15px] font-[550] leading-6 tracking-wide mt-0 md:order-5 md:pt-0 lg:pb-28">
                                <div className="flex justify-start">
                                    <h1 className="text-black pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                        Language </h1>
                                </div>
                                <p>
                                    <p>&diams; Gujarati</p>
                                    <p>&diams; Hindi</p>
                                    <p>&diams; English</p>
                                </p>
                            </div>
                        </div>
                        <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
                            <div className="flex justify-start">
                                <h1 className="text-black pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                    Address</h1>
                            </div>
                            <div className="leading-7 text-black">
                                <p>287, First - Floor, Laxminagar Society, <br /> opp. D-mart, Sarthana Jakatnaka, <br /> Surat, Gujarat, India - 395006.<br /></p>
                            </div>

                        </div>
                    </div>


                </div>
                <div className='bg-black w-full text-white text-center py-10 font-bold text-xl'>
                    Copirigt is Reserverd by @VRUSHABH SATASIYA
                </div>

            </div>
        </>
    )
}

export default Footer
