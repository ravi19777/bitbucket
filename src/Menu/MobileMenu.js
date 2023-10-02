import { useState } from "react";

const MobileMenu = ({setShowMenu2}) =>
{

    const [closeMenu,setCloseMenu] = useState(true);

    const closeMenuButton = () =>
    {
        setShowMenu2(false);
        setCloseMenu(false);
    }

    return(
        <div className={closeMenu?"absolute inset-0 bg-mobile-menu-background z-own text-mobile-menu-text-color h-full overflow-y-auto overflow: -webkit-scrollbar:none:":"hidden translate-x-full transition-all ease-in-out"}>
            
            <div className="flex mx-4 py-6 sticky top-0 bg-mobile-menu-background">

                        <div className="flex order-3 justify-center items-center h-7 w-7 mt-1 mr-1 cursor-pointer rounded-full bg-trasnparent hover:opacity-50" onClick={closeMenuButton}>
                            <span className="material-symbols-outlined fill-none opacity-90 text-white">
                                cancel
                            </span>
                        </div>


                                <div className="h-10 w-12 rounded-full bg-white"></div>
                                <div className="w-full px-4">
                                    <div id="name">
                                        <span className="text-lg font-medium">Ravi Raushan Kumar</span>
                                    </div>
                                    <div className="flex">
                                        <div id="email" className="text-sm">
                                            <span className="font-medium">ravi@gmail.com</span>
                                        </div>
                                        <div className="copy ml-4 text-sm">
                                            <span className="text-red-300 capitalize">Copy</span>
                                        </div>
                                    </div>
                                </div>
            </div>


            <div className="mx-6 py-4 border-b-[1px] border-white">
                <ul className="space-y-3">
                    <li className="">
                        <a href="" className="text-lg font-poppins font-medium flex justify-between">
                        <span>My Account</span>
                        
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>

                        </a>
                    </li>

                    <li className="">
                        <a href="" className="text-lg font-poppins font-medium flex justify-between">
                        <span>My Account</span>
                        
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>

                        </a>
                    </li>

                    <li>
                        <a href="" className="block text-lg font-poppins font-medium hover-bg-donate-background-color">AP Books</a>
                    </li>

                    <li>
                        <a href="" className="block text-lg font-poppins font-medium">AP Articles</a>
                    </li>

                    <li>
                        <a href="" className="block text-lg font-poppins font-medium">Video Series</a>
                    </li>

                    <li>
                        <a href="" className="block text-lg font-poppins font-medium">AP Circles</a>
                    </li>

                    <li>
                        <a href="" className="block text-lg font-poppins font-medium">Invite For Talk</a>
                    </li>

                    <li>
                        <a href="" className="block text-lg font-poppins font-medium">Invite For an Interview</a>
                    </li>

                    <li>
                        <a href="" className="block text-lg font-poppins font-medium">Contact Us</a>
                    </li>

                    <li className="bg-donate-background-color w-fit rounded px-4 py-2 text-header-color">
                        <a href="">
                            <span class="material-symbols-outlined mr-4">
                                volunteer_activism
                            </span>
                            <span className="font-medium">Donate</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="my-4">
                <ul className="space-y-3 pl-6 font-medium text-lg">
                    <li>
                        <a href="">About Acharya Prashant</a>
                    </li>
                    <li>
                        <a href="">Prashant Advait Foundation</a>
                    </li>
                    <li>
                        <a href="">In Media</a>
                    </li>
                    <li>
                        <a href="">Logout</a>
                    </li>
                </ul>

                <div className="flex my-4 md:block px-6">
                    <img src="https://acharyaprashant.org/images/ic_googleplay.png" alt="" className="w-atuo h-10 mr-4 md:mb-4 md:border-[1px] md:border-white md:rounded md:p-[1px]" />
                    <img src="https://acharyaprashant.org/images/ic_appstore.png" alt="" className="w-atuo h-10 md:mb-4 md:border-[1px] md:border-white md:rounded md:p-[1px]" />
                </div>

                <div className="px-6 mb-4">
                        <span className="w-full my-4">For English</span>

                        <div>
                            <span>
                                <a href="" className="mr-2 hover:text-header-color">
                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                </a>
                                <a href="" className="mx-2 hover:text-header-color">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="" className="mx-2 hover:text-header-color">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="" className="mx-2 hover:text-header-color">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                                <a href="" className="hover:text-header-color">
                                    <i className="fa fa-wikipedia-w" aria-hidden="true"></i>
                                </a>
                            </span>
                    </div>
                    </div>

                <div className="pl-6">
                        <span className="w-full my-4">For Hindi</span>

                        <div>
                            <span>
                                <a href="" className="mr-2 hover:text-header-color">
                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                </a>
                                <a href="" className="mx-2 hover:text-header-color">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="" className="mx-2 hover:text-header-color">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="" className="mx-2 hover:text-header-color">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </span>
                    </div>
                    </div>
            </div>

        </div>
    )
};

export default MobileMenu;