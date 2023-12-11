import React from 'react';
// import Img from '../assets/img1.jpg';

const Contect_Section = () => {
    return (
        <>
            <div className='select-text'>
                <div className="flex justify-center bg-gradient-to-r pb-10" style={{
                    backgroundImage: `url(https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=900&t=st=1694513157~exp=1694513757~hmac=df7c18bef6e7ae843f0c9bfd946cf57809dceb5cbe54a9877828d9487483158c)`
                }}>
                    <div className="flex flex-col justify-center mt-10 w-[90%] lg:space-y-24 max-w-7xl  ">
                        {
                            //     <div className="flex flex-col justify-center items-center text-center">
                            //     <p className="text-xl md:text-3xl font-bold uppercase my-3">
                            //         Contact Us
                            //     </p>
                            //     <div className="text-sm md:text-xl font-medium">
                            //         Get in touch
                            //     </div>
                            // </div>
                        }
                        <div className="flex flex-col justify-center items-center lg:flex-row lg:space-y-0  lg:space-x-10">

                            <a href='callto:+91 7069182001'>
                                <div className="bg-white shadow-lg flex flex-col justify-center rounded-lg items-center h-56 md:w-fit lg:w-fit md:px-12">
                                    <div className="font-semibold text-2xl border rounded-full p-4 bg-green-600"><i class="fa-solid fa-phone text-5xl text-white"></i></div>
                                    <p className="text-center text-lg p-5">
                                        +91 70691 82001
                                    </p>
                                </div>
                            </a>
                            <a href='mailto:vrushabhsatasiya82001@gmail.com'>
                                <div className="bg-white shadow-lg flex flex-col justify-center rounded-lg items-center h-56 md:w-fit lg:w-fit my-10">
                                    <div className="font-semibold text-2xl border rounded-full p-4 bg-red-600"><i class="fa-solid fa-envelope text-5xl text-white"></i></div>
                                    <p className="text-center text-lg p-5">
                                        vrushabhsatasiya82001@gmail.com
                                    </p>
                                </div>
                            </a>
                            <a href='https://github.com/Vrushabh1482001' target='_blank'>
                            <div className="bg-white shadow-lg flex flex-col justify-center rounded-lg items-center h-56 md:w-fit lg:w-fit">
                                <div className="font-semibold text-2xl border rounded-full p-4 bg-blue-600"><i class="fa-brands fa-github text-5xl text-white"></i></div>
                                <p className="text-center text-lg p-5">
                                Vrushabh1482001
                                </p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contect_Section
