import { useState } from "react";
// import MenuContainer from "./Menu/MenuContainer";
import DesktopMenu from "./Menu/DesktopMenu";
import MobileMenu from "./Menu/MobileMenu";

const Header = () =>
{

    console.log("Re-rendered!!");

    const [liveSessionShow,setLiveSessionShow] = useState(false);

    const [inviteShow,setInviteShow] = useState(false);

    const [language,setLanguage] = useState(false);

    const [showMenu,setShowMenu] = useState(false);

    console.log(showMenu);

    const liveSessionShowFun = (e) =>
    {
        e.preventDefault();
        setLiveSessionShow(!liveSessionShow);
        setInviteShow(false);
        setLanguage(false)
    }

    const inviteShowFunction = (e) =>
    {
        e.preventDefault()
        setInviteShow(!inviteShow);
        setLiveSessionShow(false);
        setLanguage(false)
    }

    const showLanguageFunction = (e) =>
    {
        e.preventDefault();
        setLanguage(!language);
        setInviteShow(false);
        setLiveSessionShow(false);
    }

    const showMenuFunction = (e) =>
    {
        e.preventDefault();
        setShowMenu(true);
    }

    return(
        <>
            <nav className="w-full h-12 flex align-middle justify-center bg-header-color ml-0 pl-0 px-4">

                {/* logo and first container */}
                <div className="w-1/4 flex h-12 md:w-full">
                    <a href="" className="flex items-center shrink-0">
                        <img src='https://acharyaprashant.org/images/ic_favicon.png' alt="" className='h-9 w-9 rounded-full ml-2' />
                    </a>

                        {/* links container */}
                        <div className="hidden lg:flex h-full space-x-4 flex-row align-middle justify-center text-white-color ml-8">
                            <a href="" className="h-full flex items-center">Home</a>

                            <div className="whitespace-nowrap flex h-full items-center relative">
                                <a href="" className="flex items-center" onClick={liveSessionShowFun}>
                                    Live Sessions
                                    {
                                        liveSessionShow ?  <span className="material-symbols-outlined">
                                                                            arrow_drop_up
                                                                        </span> : 
                                                                                        <span className="material-symbols-outlined">
                                                                                            arrow_drop_down
                                                                                        </span>
                                    }
                                </a>

                                
                                <div className={liveSessionShow?"absolute top-[120%] rounded p-4 bg-white text-slate-500 text-sm z-20":"hidden"}>
                                    <ul className="space-y-3 font-medium">
                                        <li>
                                            <a href="">Bhagwat Gita</a>
                                        </li>
                                        <li>
                                            <a href="">Sant Sarita</a>
                                        </li>
                                        <li>
                                            <a href="">Ashtavakra Samhita</a>
                                        </li>
                                        <li>
                                            <a href="">Bodh Pratyusha</a>
                                        </li>
                                    </ul>
                                </div>
                                
                                
                            </div>

                            <a href="" className="whitespace-nowrap h-full flex items-center">Video Series</a>

                            <a href="" className="whitespace-nowrap h-full flex items-center">AP Books</a>

                            <a href="" className="whitespace-nowrap h-full flex items-center">AP Articles</a>

                            <div className="relative whitespace-nowrap flex h-full items-center">
                                <a href="" className="whitespace-nowrap flex items-center h-full" onClick={inviteShowFunction}>
                                    Invite
                                    {
                                        inviteShow? <span className="material-symbols-outlined h-ful flex items-center">
                                                                arrow_drop_up
                                                            </span> : 
                                                                            <span className="material-symbols-outlined h-ful flex items-center">
                                                                                arrow_drop_down
                                                                            </span>
                                    }
                                    
                                </a>

                                <div className={inviteShow?"absolute top-[120%] rounded p-4 bg-white text-slate-500 text-sm z-20":"hidden"}>
                                    <ul className="space-y-3 font-medium">
                                        <li>
                                            <a href="">For a talk</a>
                                        </li>

                                        <li>
                                            <a href="">For an interview</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <a href="" className="whitespace-nowrap h-ful flex items-center">In Media</a>

                            <a href="" className="whitespace-nowrap h-ful flex items-center">Donate</a>
                        </div>
                </div>

                {/* second container */}
                <div className="flex justify-end mr-2 h-full w-3/4 align-middle space-x-3 text-white-color md:w-auto">
                    <a href="" className="flex items-center h-full md:hidden">Donate</a>
                    <div className="flex items-center relative">
                        <span className="flex items-center cursor-pointer" onClick={showLanguageFunction}>EN
                            {
                                language ?  <span className="material-symbols-outlined">
                                                        arrow_drop_up
                                                    </span> : <span className="material-symbols-outlined">
                                                                        arrow_drop_down
                                                                     </span>
                            }
                        </span>

                        <div className={language ? "absolute top-[120%] rounded py-2 px-4 bg-white text-slate-500 text-sm z-20" : "hidden"}>
                            <ul className="space-y-3 font-medium">
                                <li>
                                    <a href="">English</a>
                                </li>
                                <li>
                                    <a href="">हिंदी</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="" className="flex items-center">
                        <span className="material-symbols-outlined">
                            call
                        </span>
                    </a>

                    <div className="flex items-center cursor-pointer">
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </div>

                    <a href="" className="flex items-center hover:text-white" onClick={showMenuFunction}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                        <span className="hidden lg:flex">Menu</span>
                    </a>
                </div>

            </nav>

            <div className="hidden lg:flex">
                {
                    showMenu ?  <DesktopMenu setShowMenu={setShowMenu} /> : ""
                }
            </div>

            <div className="lg:hidden flex">
            {
                console.log(setShowMenu)
            }
                {
                    showMenu ? <MobileMenu setShowMenu2 = {setShowMenu} /> : ""
                }
            </div>

            {/* <MobileMenu /> */}
        </>
    )
};

export default Header;