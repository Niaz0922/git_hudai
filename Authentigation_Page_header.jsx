import { Link } from 'react-router'
import dashboard from "../public/dashboard.png";
import profile from "../public/people.png";
import sign_Up from "../public/sign_up.png";
import sign_in from "../public/sign_in.png";




function Authentigation_Page_header() {
    return (
        <>
            <header>
                <nav className="py-3 px-6 absolute top-2.5 rounded-3xl border border-[#707285]  bg-white/5 backdrop-blur-xl left-0 right-0 z-50 flex justify-between w-[987.5px] m-auto items-center  text-white">
                    <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-white/20 blur-3xl rounded-full" />
                    <div className="absolute -top-8 -right-8 h-32 w-32 bg-white/20 blur-3xl rounded-full" />

                    <div className="relative">
                        <p
                            className="font-normal text-[14px] tracking-[0.2rem]"
                            style={{
                                fontFamily: "Plus Jakarta Sans"
                            }}>VISION UI FREE</p>


                    </div>

                    <div>
                        <ul className="flex gap-6">
                            <Link to={"/dashboard"}>
                                <li className="flex gap-2 justify-center items-center cursor-pointer">
                                    <img className="w-2.75 h-2.75" src={dashboard} alt="" />
                                    <p
                                        style={{
                                            fontFamily: "Plus Jakarta Sans",
                                        }}
                                        className="text-[10px] font-bold">DASHBOARD</p>
                                </li>
                            </Link>

                            <li className="flex gap-2 justify-center items-center">
                                <img className="w-2.75 h-2.75" src={profile} alt="" />
                                <p
                                    style={{
                                        fontFamily: "Plus Jakarta Sans",
                                    }}
                                    className="text-[10px] font-bold">PROFILE</p>
                            </li>

                            <li className="flex gap-2 justify-center items-center">
                                <img className="w-2.75 h-2.75" src={sign_Up} alt="" />
                                <p
                                    style={{
                                        fontFamily: "Plus Jakarta Sans",
                                    }}
                                    className="text-[10px] font-bold">SIGN UP</p>
                            </li>

                            <li className="flex gap-2 justify-center items-center">
                                <img className="w-2.75 h-2.75" src={sign_in} alt="" />
                                <p
                                    style={{
                                        fontFamily: "Plus Jakarta Sans",
                                    }}
                                    className="text-[10px] font-bold">SIGN IN</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <button
                            type="button"
                            style={{
                                fontFamily: "Plus Jakarta Sans",
                            }}
                            className="w-50 text-white h-10 text-[10px] rounded-xl bg-blue-600  font-semibold hover:bg-blue-700 transition"
                        >
                            FREE DOWNLOAD
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}


export default Authentigation_Page_header