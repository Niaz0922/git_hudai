import Admin_Header from "./Admin_header"
import Admin_Panel_Sidebar from "./Admin_Panel_Sidebar"
import Dashboard_BG_right from "../public/dashboard_right_side_bg.png"
import wallet_icon from "../public/wallet_icon.png"
import glboal_image from "../public/glove.png"
import dashbaord_whale_pic from "../public/dashbaord_whale_pic.png"
import dashbaord_whale_pic_small from "../public/dashbaord_whale_pic_small.png"
import forward_icon from "../public/forward_icon.png"
import smile_icon from "../public/smile.png"
import satisfiction_image from "../public/satisfictiaon_section_image.png";
import "@fontsource/plus-jakarta-sans";
import dots_icon from "../public/dots_icon.png"
import safety_bar_icon from "../public/safety_bar_icon.png"
import sales_graph_background from "../public/sales_graph_background.png"
import graph_image from "../public/graph.png"
import active_users_section_image from "../public/active_users_section_background.png"
import users_graph from "../public/users_graph.png"
import projects_section_BG from "../public/projects_section_background.png"
import vertical_icon_dots from "../public/dot_icon_vertical.png"
import circle_tik_icon from "../public/circle_check_icon.png"
import xd_icon from "../public/xd_icon.png"
import members_icon from "../public/Members.png"
import order_overview_bg from "../public/orders_overview_background.png"
import bell_icon from "../public/bell_icon.png"
import dashboard_bg_small_screen from "../public/dashboard_right_side_bg_small_screen.png"
import './index.css'
import { useEffect, useState } from "react"
import { Menu } from 'lucide-react';
import { CountUp } from 'use-count-up'
import { motion } from "framer-motion";
import {motion_css} from "framer-motion";
import {motion_css} from "framer-motion";git push -u origin main
git push -u origin main
git push -u origin main
git push -u origin main
git push -u origin main
git push -u origin main


function Dashboard() {



    //Handling the background image on diffrent screen sizes

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);



    const background =
        windowSize < 1400
            ? dashboard_bg_small_screen
            : Dashboard_BG_right;

    const card_bg_whale =
        windowSize < 1200
            ? dashbaord_whale_pic_small
            : dashbaord_whale_pic;


    const [is_sidebar_opened, set_sidebar_opened] = useState(false)

    function Handle_Sidebar() {
        set_sidebar_opened(true)
    }


    const [is_card_hover, set_is_hover] = useState(false)

    function Handle_Card_Hover() {
        set_is_hover(true)
    }



    return (
        <>
            <main className="flex">


                <section className={`sm_min:fixed sm_min:top-0 sm_min:left-0 w-69 h-screen bg-black z-999 transform transition-transform duration-300 ease-in-out  ${is_sidebar_opened ? "sm_min:translate-x-0" : "sm_min:translate-x-full"}  overflow-y-hidden overflow-x-hidden`}>
                    <Admin_Panel_Sidebar set_sidebar_opened={set_sidebar_opened} />
                </section>


                <section
                    style={{
                        // 2. Pass the imported reference into the url() function
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                    }}
                    className={`h-screen overflow-y-scroll ${is_sidebar_opened ? "bg-black/50" : ""}`}
                >
                    <Admin_Header />
                    {/* Dashhboard Text after the admin header */}
                    <div className="pl-12 flex gap-2  items-center mt-4">
                        <Menu onClick={Handle_Sidebar} color="white" className="hidden sm_min:block" />
                        <h2
                            style={{
                                fontFamily: "Plus Jakarta Sans"
                            }}
                            className="text-[14px] font-normal text-white "> Dashboard</h2>
                    </div>
                    {/* Dashhboard Text after the admin header */}

                    <main className="mx-6">



                        {/* Dashbaord second card section calculations starts */}
                        <div className="first  cards w-fulls exmin:flex-wrap justify-between  mt-8 flex gap-4">
                            <div className="transition-colors duration-300 ease-in-out hover:bg-[#1F2161] bg-black w-full flex items-center px-4 py-4 justify-between rounded-2xl">
                                <div>
                                    <h2
                                        style={{
                                            fontFamily: "Plus Jakarta Sans"
                                        }}
                                        className="text-[12px] font-normal text-[#A0AEC0]"
                                    >Today’s Money</h2>

                                    <div className="flex gap-2 items-center">
                                        <h2
                                            style={{
                                                fontFamily: "Plus Jakarta Sans"
                                            }}
                                            className="font-bold text-[18px] text-white">$22,354

                                        </h2>
                                        <h2
                                            style={{
                                                fontFamily: "Plus Jakarta Sans"
                                            }}
                                            className="text-[#01B574] font-bold text-[14px]"
                                        >+53%</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-[#0075FF] flex justify-center items-center">
                                        <img className="" src={wallet_icon} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="transition-colors duration-300 ease-in-out hover:bg-[#1F2161] bg-black w-full flex items-center px-4 py-4 justify-between rounded-2xl">
                                <div>
                                    <h2
                                        style={{
                                            fontFamily: "Plus Jakarta Sans"
                                        }}
                                        className="text-[12px] font-normal text-[#A0AEC0]"
                                    >Today’s Users</h2>

                                    <div className="flex gap-2 items-center">
                                        <h2
                                            style={{
                                                fontFamily: "Plus Jakarta Sans"
                                            }}
                                            className="font-bold text-[18px] text-white">
                                            23,390

                                        </h2>
                                        <h2
                                            style={{
                                                fontFamily: "Plus Jakarta Sans"
                                            }}
                                            className="text-[#01B574] font-bold text-[14px]"
                                        >+8%</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-[#0075FF] flex justify-center items-center">
                                        <img className="" src={glboal_image} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="transition-colors duration-300 ease-in-out hover:bg-[#1F2161] bg-black w-full flex items-center px-4 py-4 justify-between rounded-2xl">
                                <div>
                                    <h2
                                        style={{
                                            fontFamily: "Plus Jakarta Sans"
                                        }}
                                        className="text-[12px] font-normal text-[#A0AEC0]"
                                    >New Clients</h2>

                                    <div className="flex gap-2 items-center">
                                        <h2
                                            style={{
                                                fontFamily: "Plus Jakarta Sans"
                                            }}
                                            className="font-bold text-[18px] text-white">$2,000</h2>
                                        <h2
                                            style={{
                                                fontFamily: "Plus Jakarta Sans"
                                            }}
                                            className="text-[#E31A1A] font-bold text-[14px]"
                                        >-14%</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-[#0075FF] flex justify-center items-center">
                                        <img className="" src={wallet_icon} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="transition-colors duration-300 ease-in-out hover:bg-[#1F2161] bg-black w-full flex items-center px-4 py-4 justify-between rounded-2xl">
                                <div>
                                    <h2
                                        style={{
                                            fontFamily: "Plus Jakarta Sans"
                                        }}
                                        className="text-[12px] font-normal text-[#A0AEC0]"
                                    >Today’s Money</h2>

                                    <div className="flex gap-2 items-center">
                                        <h2
                                            style={{
                                                fontFamily: "Plus Jakarta Sans"
                                            }}
                                            className="font-bold text-[18px] text-white">$3020</h2>
                                        <h2
                                            style={{
                                                fontFamily: "Plus Jakarta Sans"
                                            }}
                                            className="text-[#01B574] font-bold text-[14px]"
                                        >+55%</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-[#0075FF] flex justify-center items-center">
                                        <img className="" src={wallet_icon} alt="" />
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* Dashbaord second card section calculations ends */}

                        {/* Dashboard third section starts here */}
                        <div className="second flex exmin:flex-wrap gap-6 mt-6">

                            <div onMouseEnter={Handle_Card_Hover} onMouseLeave={()=>set_is_hover(false)} className="relative p-[10px] w-full lg:basis-2/5">
                                <div
                                    className={`absolute rounded-2xl inset-0 ${is_card_hover ? "bg-linear-to-r from-violet-800 to-violet-600  opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" : ""}`}>
                                </div>
                                <div
                                    style={{
                                        backgroundImage: `url(${card_bg_whale})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                    className="w-full p-2 z-999 lg:basis-2/5 h-[330px] rounded-2xl relative overflow-hidden"
                                >





                                    {/* Content */}
                                    <div className="pl-8 pt-8 relative z-20">
                                        <h2 className="text-[14px] font-normal text-[#A0AEC0]">
                                            Welcome Back,
                                        </h2>

                                        <h2 className="font-bold text-[28px] text-white mb-6">
                                            Mark Johnson
                                        </h2>

                                        <h2 className="text-[16px] w-[33%] font-normal text-[#A0AEC0]">
                                            Glad to see you again! Ask me anything.
                                        </h2>
                                    </div>

                                    <div className="flex gap-1 mt-30 ml-8 relative z-20">
                                        <p className="text-[12px] text-white font-normal">
                                            Tap to record
                                        </p>
                                        <img src={forward_icon} alt="" />
                                    </div>

                                </div>
                            </div>

                            <div style={{
                                background: `
                                    
                                    linear-gradient(
                                        to bottom,
                                        rgba(0,0,0,1) 0%,
                                        rgba(0,0,0,1) 15%,
                                        rgba(0,0,0,0.98) 50%,
                                        rgba(29, 56, 96, 0.9) 85%,
                                        rgba(34,69,80,0.9) 100%
                                    )
                                    `,
                            }}
                                className="w-full lg:basis-1/5 h-[330px] rounded-2xl">
                                <div className="pt-6 pl-6">
                                    <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">
                                        Satisfaction Rate
                                    </h2>

                                    <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="text-[14px] font-normal text-[#A0AEC0]">
                                        From all projects
                                    </h2>
                                </div>

                                <div className="icons flex flex-col items-center mt-6 relative">
                                    <div className="relative w-full h-[100px]">
                                        {/* <img className="md_screen:w-70 md_screen:m-auto" src={satisfiction_image} alt="" /> */}
                                        <motion.div
                                            className="absolute inset-0 overflow-hidden"
                                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                                            animate={{ clipPath: "inset(0 0% 0 0)" }}
                                            transition={{ duration: 2 }}
                                        >
                                            <img
                                                src={satisfiction_image}
                                                alt=""
                                                className="w-full h-full object-contain mdxl:w-80 mdxl:m-auto"
                                            />
                                        </motion.div>
                                    </div>
                                    <div className="absolute  top-12 md_screen:top-8">
                                        <img src={smile_icon} alt="" />
                                    </div>
                                </div>


                                <div className="w-[90%] mt-2 md_screen:mt-4 bg-black mx-auto rounded-2xl flex justify-between items-start">
                                    <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal pl-4 pt-4 text-[12px] text-[#A0AEC0]">0%</p>

                                    <div className="py-4 flex flex-col items-center">
                                        <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[28px] md_screen:text-22 text-white">
                                            <CountUp isCounting start={0} end={95} duration={3.2} />%
                                        </h2>
                                        <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[12px] text-[#A0AEC0]">Based on likes</p>
                                    </div>

                                    <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal pr-2 pt-4 text-[12px] text-[#A0AEC0]">100%</p>


                                </div>




                            </div>

                            <div style={{
                                background: `
                                    linear-gradient(
                                        to bottom,
                                        rgba(0,0,0,1) 0%,
                                        rgba(0,0,0,1) 15%,
                                        rgba(0,0,0,1) 50%,
                                        rgba(24, 40, 65, 0.9) 85%,
                                        rgba(24, 40, 65, 0.9) 100%
                                    )
                                    `,
                            }}
                                className="w-full lg:basis-2/5 h-[340px] rounded-2xl">

                                {/* Heading of the Card */}
                                <div className="px-6 py-6 flex justify-between items-center">
                                    <h2 style={{
                                        fontFamily: "Plus Jakarta Sans"
                                    }}
                                        className="font-bold text-[18px] text-white">Referral Tracking</h2>
                                    <div>
                                        <img src={dots_icon} alt="" />
                                    </div>
                                </div>
                                {/* Heading of the Card */}


                                <main className="flex gap-5 ml-10 mdxl:items-center">
                                    <div className="flex-1 left_side flex flex-col gap-4">
                                        <div className="bg-black pl-4 pt-6 pb-10 rounded-2xl">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="text-[14px] font-normal text-[#A0AEC0]">
                                                Invited
                                            </h2>

                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">
                                                145 people
                                            </h2>
                                        </div>

                                        <div className="bg-black pl-4 pt-6 pb-10 rounded-2xl">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="text-[14px] font-normal text-[#A0AEC0]">
                                                Bonus
                                            </h2>

                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">
                                                1,465
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col items-center  relative">
                                        <div>
                                            {/* <img className="mdxl:w-80 mdxl:m-auto" src={safety_bar_icon} alt="" /> */}
                                            <motion.div
                                                className="absolute inset-0 overflow-hidden"
                                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                                animate={{ clipPath: "inset(0 0% 0 0)" }}
                                                transition={{ duration: 2 }}
                                            >
                                                <img
                                                    src={safety_bar_icon}
                                                    alt=""
                                                    className="w-full h-full object-contain mdxl:w-80 mdxl:m-auto"
                                                />
                                            </motion.div>
                                        </div>
                                        <div className="flex flex-col items-center absolute top-10 mdxl:top-6 ">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="text-[14px] font-normal text-[#A0AEC0]">
                                                Safety
                                            </h2>

                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[50px] mdxl:text-35 text-white">
                                                <CountUp isCounting start={0} end={9.3} duration={3.2} />
                                            </h2>
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="text-[14px] font-normal text-[#A0AEC0]">
                                                Total Score
                                            </h2>
                                        </div>

                                    </div>
                                </main>



                            </div>


                        </div>

                        {/* Dashboard third section Ends here */}

                        {/* Dashboard fourth section starts */}
                        <div className="fourth mt-4 exmin:flex-wrap flex gap-6 ">
                            <div
                                style={{
                                    // 2. Pass the imported reference into the url() function
                                    backgroundImage: `url(${sales_graph_background})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                className="w-[55%] exmin:w-full h-auto rounded-2xl">

                                <div className=" pl-6 pt-4">
                                    <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">Sales overview</h2>
                                    <div className="flex gap-2">
                                        <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[14px] text-green-500">(+5) more</p>
                                        <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[14px] text-[#A0AEC0]">in 2021</p>
                                    </div>
                                </div>


                                <div className="graph pt-12 pb-6 mx-4 ">
                                    <img src={graph_image} alt="" />
                                </div>

                            </div>

                            <div
                                style={{
                                    backgroundImage: `url(${active_users_section_image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                className="w-[45%] exmin:w-full rounded-2xl">

                                <div className="active_user_graph bg-black rounded-2xl mx-4 my-4">
                                    <img src={users_graph} alt="" />
                                </div>

                                <div className=" pl-6 pt-2">
                                    <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">Active Users</h2>
                                    <div className="flex gap-2">
                                        <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[14px] text-green-500">(+23)</p>
                                        <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[14px] text-[#A0AEC0]">than last week</p>
                                    </div>
                                </div>

                                <div className="cards_users exmin:flex-wrap exmin:gap-16 py-4 ml-6 mt-6 flex items-center gap-22">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-[25px] h-[25px] rounded-md bg-[#0075FF] flex justify-center items-center">
                                                <img className="w-[12.5px] h-auto" src={wallet_icon} alt="" />
                                            </div>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[14px] text-[#A0AEC0]">Users</p>
                                        </div>

                                        <div className="mt-1">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">32,984</h2>
                                            <div className="w-[66px] bg-[#0075FF] h-[3px] mt-1"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-[25px] h-[25px] rounded-md bg-[#0075FF] flex justify-center items-center">
                                                <img className="w-[12.5px] h-auto" src={wallet_icon} alt="" />
                                            </div>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[14px] text-[#A0AEC0]">Clicks</p>
                                        </div>

                                        <div className="mt-1">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">2,42m</h2>
                                            <div className="w-[66px] bg-[#0075FF] h-[3px] mt-1"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-[25px] h-[25px] rounded-md bg-[#0075FF] flex justify-center items-center">
                                                <img className="w-[12.5px] h-auto" src={wallet_icon} alt="" />
                                            </div>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[14px] text-[#A0AEC0]">Sales</p>
                                        </div>

                                        <div className="mt-1">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">2,400$</h2>
                                            <div className="w-[66px] bg-[#0075FF] h-[3px] mt-1"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-[25px] h-[25px] rounded-md bg-[#0075FF] flex justify-center items-center">
                                                <img className="w-[12.5px] h-auto" src={wallet_icon} alt="" />
                                            </div>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[14px] text-[#A0AEC0]">Items</p>
                                        </div>

                                        <div className="mt-1">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">320</h2>
                                            <div className="w-[66px] bg-[#0075FF] h-[3px] mt-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Dashboard fourth section ends */}
                        <div className="fifth mt-6 exmin:flex-wrap flex gap-6">
                            <div
                                style={{
                                    backgroundImage: `url(${projects_section_BG})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                className="w-[65%] exmin:w-full rounded-2xl">
                                <div className="project_header flex items-center justify-between px-4 py-4">
                                    <div>
                                        <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">Projects</h2>
                                        <div className="flex gap-1  mt-2 items-center">
                                            <div>
                                                <img src={circle_tik_icon} alt="" />
                                            </div>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[14px] text-[#A0AEC0]">30 done this month</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={vertical_icon_dots} alt="" />
                                    </div>
                                </div>

                                <div className="users_tab px-6 pb-6 pt-4 overflow-x-auto">
                                    <table className="w-[95%] min-w-[700px] lg:min-w-0">
                                        <thead>
                                            <tr
                                                style={{ fontFamily: "Plus Jakarta Sans" }}
                                                className="border-b border-b-[#56577A] text-[10px] text-[#A0AEC0]"
                                            >
                                                <th className="text-left py-4">COMPANIES</th>
                                                <th className="text-left py-4">MEMBERS</th>
                                                <th className="text-left py-4">BUDGET</th>
                                                <th className="text-left py-4">COMPLETION</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {/* ROW */}
                                            <tr className="border-b border-b-[#56577A]">
                                                <td className="py-6">
                                                    <div className="flex items-center gap-4">
                                                        <img src={xd_icon} alt="" />
                                                        <p className="text-[14px] text-white">
                                                            Chakra Soft UI Version
                                                        </p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <img src={members_icon} alt="" />
                                                </td>

                                                <td>
                                                    <p className="font-bold text-[14px] text-white">
                                                        $14,000
                                                    </p>
                                                </td>

                                                <td>
                                                    <div className="flex flex-col gap-2">
                                                        <p className="font-bold text-[14px] text-white">60%</p>
                                                        <div className="w-20 h-[3px] bg-[#2D2E5F] rounded-full overflow-hidden">
                                                            <div className="w-[60%] h-full bg-[#0075FF]"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr className="border-b border-b-[#56577A]">
                                                <td className="py-6">
                                                    <div className="flex items-center gap-4">
                                                        <img src={xd_icon} alt="" />
                                                        <p className="text-[14px] text-white">
                                                            Chakra Soft UI Version
                                                        </p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <img src={members_icon} alt="" />
                                                </td>

                                                <td>
                                                    <p className="font-bold text-[14px] text-white">
                                                        $14,000
                                                    </p>
                                                </td>

                                                <td>
                                                    <div className="flex flex-col gap-2">
                                                        <p className="font-bold text-[14px] text-white">60%</p>
                                                        <div className="w-20 h-[3px] bg-[#2D2E5F] rounded-full overflow-hidden">
                                                            <div className="w-[60%] h-full bg-[#0075FF]"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr className="border-b border-b-[#56577A]">
                                                <td className="py-6">
                                                    <div className="flex items-center gap-4">
                                                        <img src={xd_icon} alt="" />
                                                        <p className="text-[14px] text-white">
                                                            Chakra Soft UI Version
                                                        </p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <img src={members_icon} alt="" />
                                                </td>

                                                <td>
                                                    <p className="font-bold text-[14px] text-white">
                                                        $14,000
                                                    </p>
                                                </td>

                                                <td>
                                                    <div className="flex flex-col gap-2">
                                                        <p className="font-bold text-[14px] text-white">60%</p>
                                                        <div className="w-20 h-[3px] bg-[#2D2E5F] rounded-full overflow-hidden">
                                                            <div className="w-[60%] h-full bg-[#0075FF]"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr className="border-b border-b-[#56577A]">
                                                <td className="py-6">
                                                    <div className="flex items-center gap-4">
                                                        <img src={xd_icon} alt="" />
                                                        <p className="text-[14px] text-white">
                                                            Chakra Soft UI Version
                                                        </p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <img src={members_icon} alt="" />
                                                </td>

                                                <td>
                                                    <p className="font-bold text-[14px] text-white">
                                                        $14,000
                                                    </p>
                                                </td>

                                                <td>
                                                    <div className="flex flex-col gap-2">
                                                        <p className="font-bold text-[14px] text-white">60%</p>
                                                        <div className="w-20 h-[3px] bg-[#2D2E5F] rounded-full overflow-hidden">
                                                            <div className="w-[60%] h-full bg-[#0075FF]"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                            </div>

                            <div
                                style={{
                                    backgroundImage: `url(${order_overview_bg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                className="w-[35%] exmin:w-full rounded-2xl pl-6">

                                <div className="project_header flex items-center justify-between pt-8 ">
                                    <div>
                                        <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[18px] text-white">Orders overview</h2>
                                        <div className="flex gap-1  mt-2 items-center">
                                            <div>
                                                <img src={circle_tik_icon} alt="" />
                                            </div>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-bold text-[14px] text-[#A0AEC0]">+30% this month</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[50%] flex flex-col gap-8  pb-6  pt-8">
                                    <div className="flex gap-4">
                                        <div>
                                            <img src={bell_icon} alt="" />
                                        </div>

                                        <div className="flex flex-col justify-center gap-1">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[14px] text-white">$2400, Design changes</h2>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[12px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div>
                                            <img src={bell_icon} alt="" />
                                        </div>

                                        <div className="flex flex-col justify-center gap-1">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[14px] text-white">$2400, Design changes</h2>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[12px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div>
                                            <img src={bell_icon} alt="" />
                                        </div>

                                        <div className="flex flex-col justify-center gap-1">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[14px] text-white">$2400, Design changes</h2>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[12px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div>
                                            <img src={bell_icon} alt="" />
                                        </div>

                                        <div className="flex flex-col justify-center gap-1">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[14px] text-white">$2400, Design changes</h2>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[12px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div>
                                            <img src={bell_icon} alt="" />
                                        </div>

                                        <div className="flex flex-col justify-center gap-1">
                                            <h2 style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[14px] text-white">$2400, Design changes</h2>
                                            <p style={{ fontFamily: "Plus Jakarta Sans" }} className="font-normal text-[12px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>


                </section>


            </main >

        </>
    )
}

export default Dashboard



{/* Small screen section */ }
