import React from 'react'
import Img from '../Assats/Vrushabh.jpg'

const Hero_Section = () => {
    return (
        <>
            <div
                className="flex justify-center bg-no-repeat  bg-cover h-full md:bg-center"
                style={{
                    backgroundImage: `url(https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=900&t=st=1694513157~exp=1694513757~hmac=df7c18bef6e7ae843f0c9bfd946cf57809dceb5cbe54a9877828d9487483158c)`
                }}
            >
                <div className="flex flex-col items-center ">

                    <div className="flex flex-col justify-center items-center text-centermax-w-7xl my-8 py-4 px-10">
                        <div className='my-12'>
                            <img src={Img} className='rounded-full w-72'></img>
                        </div>

                        <div className="flex flex-col text-gray-700mt-5 hover:skew-x-3 text-center">
                            <h1 className="text-4xl md:text-[50px] font-semibold">
                                Hello I'm VRUSHABH SATASIYA
                            </h1>
                            <p className="text-xl mt-2 md:mt-4 tracking-wide">
                                Full Stack Developer - Freelancer
                            </p>
                        </div>
                        <p className="mt-4 text-md md:w-[52%] tracking-wide leading-7 hover:skew-x-3 text-center">
                            I'm a Full Stack Developer in Surat, Gujarat.
                            I have 1 year and 6 month Experience in Web and App development. I have serious passion for Backend Development,
                            Let's make something special.
                        </p>
                        <div className="space-x-3 mt-6 md:mt-4 text-white animate-pulse">
                            <a href="https://github.com/Vrushabh1482001">
                                {" "}
                                <i className="fa-brands fa-github bg-blue-600 hover:text-indigo-600 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center" />
                            </a>
                            <a href="https://in.linkedin.com/in/vrushabh-satasiya-2bb149260" target='_blank'>
                                {" "}
                                <i className="fa-brands fa-linkedin bg-blue-600 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center" />
                            </a>
                            <a href="https://www.instagram.com/vrushabh_satasiya/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
                                {" "}
                                <i className="fa-brands fa-instagram bg-blue-600 hover:text-red-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center" />
                            </a>
                            <a href="https://www.facebook.com/vrushabh.satasiya.9" target='_blank'>
                                {" "}
                                <i className="fa-brands fa-facebook-f bg-blue-600 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center " />
                            </a>



                        </div>
                        <div className="flex mt-10 space-x-5">

                            <a href='mailto:vrushabhsatasiya82001@gmail.com'><button className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                                Contact Me
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Hero_Section
