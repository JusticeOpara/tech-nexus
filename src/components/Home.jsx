import React from "react"
import TechHub from '../assets/logo.svg'
import { Input } from "postcss"
import { useState } from "react";
// import { Link as LinkR } from "react-router-dom"
import heroImg1 from '../assets/hero1.png'
import heroImg2 from "../assets/hero2.png"
import MaskGroup from "../assets/MaskGroup1.svg"
import MaskGroup2 from "../assets/MaskGroup2.svg"
import MaskGroup3 from "../assets/MaskGroup3.svg"
import MaskGroup4 from "../assets/MaskGroup4.svg"
import MaskGroup5 from "../assets/MaskGroup5.svg"
// import MaskGroup6 from "../assets/MaskGroup6.png"
// import MaskGroup7 from "../assets/MaskGroup7.png"
import { HiOutlineArrowRight } from 'react-icons/hi';
import Star from "../assets/star.png"
import Community from "../assets/Community.png"
import Education from "../assets/Education.png"
import Guidance from "../assets/Guidance.png"


export default function Home() {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)

    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const displayText = () => {
        switch (selectedOption) {
            case 'option1':
                return 'This is the text for Option 1.';
            case 'option2':
                return 'This is the text for Option 2.';
            case 'option3':
                return 'This is the text for Option 3.';
            default:
                return '';
        }
    }


    return (

        <>
            <div className="container-lg bg-[#ffeede] box-border ">

                <nav className="bg-blue-500 container-lg flex  flex-row justify-between  items-center  h-20 lg:h-16 sm:h-18   lg:px-2
                                   text-white  z-10 ">


                    <div className='' >

                        <img src={TechHub} className="w-28 " alt="tech-logo" />

                    </div>
                    <input type="text" placeholder="Search"
                        className=" top-20 left-319 w-597 h-50 bg-gray-100 border border-gray-300 rounded-lg opacity-100" />



                    <div className='lg:flex'>
                        <ul className=' text-base hidden   lg:flex  text-black font-mono space-x-5  '>

                            <li to='#' className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >   Home    </li>
                            <li to='#about' className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >   Courses    </li>
                            <li to='#skills' className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >    Mentorship   </li>

                        </ul>
                    </div>

                    <div className='lg:flex hidden text-black '>
                        <button className='bg-[#E8F1FF] text-[#2378FF] px-4 py-1 rounded-lg text-sm'> Login  </button>

                        <button className='bg-[#E8F1FF] text-[#2378FF] px-4 py-1 rounded-lg text-sm'> Register </button>

                    </div>


                    {/* hamburger */}
                    {/* <div onClick={handleNav} className=' lg:hidden z-10 '>
                        {nav ? <AiOutlineClose className='text-[#E0A040] ' size={32} /> : 
                <CgMenuGridR className='text-[#E0A040] ' size={32} />}

                    </div>


                    <div onClick={handleNav} className={nav ? ' leading-loose text-center text-2xl rounded-lg absolute text-white  left-0 top-0    w-full m-auto z-10    flex h-[400px]   mt-20 bg-[#0B1E33]   flex-col' : 'absolute left-[-100%] '}>
                        <div >
                            <ul data-aos="fade-up" className='lg:hidden text-xlg font-semibold mt-10 font-fira  flex flex-col '>
                                <li to='#' className='mt-2' >Home</li>
                                <li to='#about' className='mt-2' >Courses </li>
                                <li to='#skills' className='mt-2' >Testmional</li>

                            </ul>
                        </div>
                    </div> */}

                </nav>

                <div className="bg-[#E8F1FE] w-full h-screen flex justify-center items-center">

                    <div className="lg:w-11/12  lg:h-4/6 bg-gray-200 flex flex-row justify-between items-center  px-10">

                        <div className="w-1/2 h-full bg-blue-700 flex flex-col justify-center">

                            <h1 className="lg:text-4xl font-semibold ">Start a career in tech with th right course and mentorship</h1>

                            <p className="text-xl font-normal">
                                Techie Hub offers you the courses and mentorship you need to be on your way to an amazing new career.
                            </p>

                            <div className="">

                                <button>Register for free</button>

                                <buttton>Expore Courses</buttton>

                            </div>


                        </div>

                        <div className="relative bg-red-200 w-1/2  h-full ">

                            <img className="w-3/5  float-right" src={heroImg1} alt="HeroImage1" />


                            <img className=" absolute w-3/5   top-40 right-40 z-10" src={heroImg2} alt="HeroImage2" />


                        </div>
                    </div>


                </div>

                <div className="bg-slate-700 w-full h-40 flex flex-col justify-center items-center">
                    <div>
                        <h1> Get mentored by tech veterans working with top companies</h1>
                    </div>

                    <div className=" flex flex-row justify-between items-center">

                        <img src={MaskGroup} className="" alt="groupIcon" />
                        <img src={MaskGroup2} className="" alt="groupIcon" />
                        <img src={MaskGroup3} className="" alt="groupIcon" />
                        <img src={MaskGroup4} classsName="" alt="groupIcon" />
                        <img src={MaskGroup5} className="" alt="groupIcon" />
                        {/* <img src={MaskGroup6} className="" alt="groupIcon" />
                        <img src={MaskGroup7} className="" alt="groupIcon" /> */}

                    </div>

                </div>



                <div className="bg-slate-400 w-full h-screen flex flex-col justify-between items-center my-32">


                    <div className=" bg-slate-500 w-1/2 h-40 rounded-2xl flex flex-row text-center ">

                        <div className=" h-full w-1/2">

                            <h2>Available Courses</h2>

                            <select value={selectedOption} onChange={handleOptionChange}>
                                <option value="">Category</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                            <p></p>
                        </div>



                        <div className=" h-full w-1/2">
                            <h2>Mentors</h2>
                            <select value={""} onChange={""}>
                                <option value="">Category</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                    </div>

                    <div className="bg-slate-300 lg:w-11/12 lg:h-3/5 px-10 flex flex-row justify-between items-center  gap-4">

                        <div className="w-8/12 h-full bg-neutral-600 flex flex-col justify-between" >
                            <div className="w-full lg:h-5/6  bg-purple-500 rounded-lg flex flex-col justify-center gap-8  ">
                                <h1 className="font-semibold">Courses</h1>
                                <div className="bg-slate-600 h-36 w-full flex flex-col justify-between">

                                    <h1 className="font-bold">Intro to tech</h1>

                                    <li>Beginner   {displayText()} </li>

                                    <p className="font-medium">Take your first step into the world of tech. Introduction to tech will teach you all about the basics of tech
                                        and explain all the niches so you can pick one that best suits your personality.</p>


                                </div>
                                <button className="bg-blue-500 w-28 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ml-auto "> Enroll</button>


                            </div>
                            <div className="flex items-center ">  <p >Expore Courses</p><HiOutlineArrowRight /></div>

                        </div>


                        <div className="w-4/12 h-full bg-slate-200 flex flex-col justify-between">
                            <div className="w-full h-5/6  bg-zinc-600 rounded-lg flex flex-col justify-center gap-8 ">

                                <h1 className="font-semibold">Mentorship</h1>

                                <div className="bg-pink-400 h-28 w-full flex flex-col justify-between">
                                    <h1 className="font-bold">Beginners councelling</h1>
                                    <p className="font-medium">Happy to guide you in making that first choice of which tech path to follow.</p>
                                </div>

                                <div className="ml-auto">
                                    <button className="bg-blue-500 w-28 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg ">Available</button>
                                    <button className="bg-blue-500 w-28 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg ">Book</button>

                                </div>

                            </div>
                            <div className="flex  flex-row items-center "><a >Find Mentor </a>  <HiOutlineArrowRight /></div>
                        </div>

                    </div>


                </div>





                <div className="bg-blue-400 w-full h-screen flex flex-col justif-center items-center mb-64">

                    <div className="bg-red-700 w-11/12 h-full relative ">

                        {/* <div className="h-3/4 bg-pink-700 flex flex-col justify-center"> */}
                        <h1 className="font-bold text-lg">ABOUT US</h1>

                        <div className="flex bg-red-400 justify-center h-96 ">
                            <div className="font-medium text w-10/12 h-3/4 flex flex-col justify-between leading-loose bg-white  ">
                                <p>Techie Hub is the #1 platform for anything tech education.
                                    Your one stop destination to equip yourself with tech knowledge using our enriched courses at your disposal and access to mentoring sections to better guide you,
                                    answer your questions and steer you in the right direction.</p>

                                <p>
                                    By offering courses and mentorship, Techie Hub has grown to over 150,000 members from different countries,
                                    backgrounds and profession.
                                </p>

                                <p>
                                    Through our directory and amazing feedback feature, we at Techie Hub research and discover
                                    amazing new ways of training and impacting knoeledge by comparing courses nd reading student review.
                                </p>


                                <p>Get started today with Techie Hub and land that dream career you desire.</p>
                            </div>
                        </div>

                        {/* </div> */}




                        {/* <div className="bg-black h-3/5 flex flex-col justify-center "> */}
                        <h1 className="text-center bg-white font-bold text-3xl">Why Choose Use</h1>

                        <div className=" flex flex-row justify-evenly w-full  absolute top-3/4">

                            <div className="bg-red-200 w-80 h-72 border border-black px-8 flex flex-col justify-center items-center">

                                <img src={Star} alt="Star" />

                                <h1 className="font-bold"> Cerfied Tutors</h1>
                                <p className="text-sm">Take your first step into the world of tech. Introduction to tech will teach you about the basics of tech and explain
                                    all the niches so you can pick one that best suits your personality.</p>
                            </div>


                            <div className="bg-red-200 w-80 h-72 border border-black px-8 flex flex-col justify-center items-center">

                                <img src={Star} alt="Star" />

                                <h1 className="font-bold">Flexible Payment Plan</h1>

                                <p className="text-sm">
                                    Take your first step into the world of tech. Introduction to tech will teach you
                                    about the basics of tech and explain all the niches so you can pick one that best suits your personality.
                                </p>
                            </div>


                            <div className="bg-red-200 w-80 h-72 border border-black flex flex-col justify-center items-center px-8">

                                <img src={Star} alt="Star" />

                                <h1 className="font-bold">Self Paced Courses</h1>

                                <p className="text-sm">
                                    Take your first step into the world of tech. Introduction to tech will teach you about the basics of tech
                                    and explain all the niches so you can pick one that best suits your personality.
                                </p>
                            </div>
                        </div>
                        {/* </div> */}

                    </div>
                </div>


                <div className="bg-[#E4A5FF] w-full h-screen">


                    <header className="font-black text-5xl">Empowerment to build in-demand tech skills</header>

                    <div>

                        <div>
                            <h1> GET GUIDANCE</h1>
                            <h1>Mentors guide th way</h1>
                            <p>
                                You may be starting a new career path in tech, but you don't have to start this journey alone.
                                Get access to our vibrant mentors eager to coach you in the right direction every step of the way.
                            </p>
                            <button>SIGN UP FOR MENTORSHIP</button>
                        </div>


                        
                            <img src={Guidance} className="w-1/5 h-auto" alt="Guidance" />
                        

                    </div>


                    <div>

                        <div>

                            <h1>EDUCATION</h1>
                            <h1>Courses Just For You</h1>

                            <p>
                                All you have to do is pick a tech niche and select a course from our vast nest of courses.
                                We have enriched courses for different aspects of tech ranging from web development to product design courses.
                            </p>
                            <button>SIGN UP FOR MENTORSHIP</button>
                        </div>


                        
                            <img src={Education} className="w-1/5 h-auto" alt="Education" />
                        

                    </div>


                    <div>

                        <div>
                            <h1>COMMUNITY</h1>
                            <h1>Peer Of Like Mind</h1>

                            <p>
                                All you have to do is pick a tech niche and select a course from our vast nest of courses.
                                We have enriched courses for different aspects of tech ranging from web development to product design courses.
                            </p>
                            <div>

                            </div>

                        </div>


                        
                            <img src={Community} className="w-1/5 h-auto" alt="community" />
                        

                    </div>



                </div>

            </div>







        </>

    )
}