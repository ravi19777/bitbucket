import { useState } from "react";
import useCategories from "./useCategories";

const DesktopMenu = ({setShowMenu}) =>
{

    const categoriesFinalData = useCategories();

    const [showMore,setShowMore] = useState(false);

    const [showMoreText,setShowMoreText] = useState(true);

    const [closeMenu,setCloseMenu] = useState(true);

    if(!categoriesFinalData)
    {
        return(
            <>

            </>
        )
    };

    // console.log(categoriesFinalData[0]);

    const fewerElement = categoriesFinalData[0];

    const moreElement = categoriesFinalData[1];

    const showMoreFunction = () =>
    {
        setShowMore(!showMore);

        setShowMoreText(!showMoreText);
    }

    const closeMenuButton = () =>
    {
        setShowMenu(false);
        setCloseMenu(false);
    }

    return(
        <>
            <div className={closeMenu ? "fixed inset-0 z-10 border-2 border-black w-full h-full bg-black opacity-60" : "hidden translate-x-full transition-all ease-in-out"}></div>
            <div className="fixed top-0 right-0 z-own hidden lg:block">

                <div className={closeMenu?"h-full flex items-start": "translate-x-full transition-all ease-in-out delay-100 hidden"}>

                    <div className="flex justify-center items-center h-7 w-7 mt-1 mr-1 cursor-pointer rounded-full bg-trasnparent hover:opacity-50" onClick={closeMenuButton}>
                        <span className="material-symbols-outlined fill-white opacity-90 text-white">
                            cancel
                        </span>
                    </div>

                    <div className="h-[100vh] xl:w-[25vw] lg:w-[30vw] bg-white overflow-y-auto flex flex-col" >

                        <div>

                            <div className="flex mx-4 border-b-[1px] py-2 border-slate-200 ">
                                <div className="h-10 w-12 rounded-full bg-slate-500"></div>
                                <div className="w-full px-4">
                                    <div id="name">
                                        <span>Ravi Raushan Kumar</span>
                                    </div>
                                    <div className="flex">
                                        <div id="email" className="text-sm">
                                            <span>ravi@gmail.com</span>
                                        </div>
                                        <div className="copy ml-2 text-sm">
                                            <span className="text-header-color">Copy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-4 space-y-2 border-b-[1px] mx-4 pb-4">
                                <a href="" className="block">Bhagwat Gita</a>
                                <a href="" className="block">Sant Sarita</a>
                                <a href="" className="block">Ashtavakra Samhita</a>
                                <a href="" className="block">Bodh Pratyusha</a>
                                <a href="" className="block">AP Books</a>
                                <a href="" className="block">AP Articles</a>
                                <a href="" className="block">Video Series</a>
                                <a href="" className="block">AP Circle</a>
                                <a href="" className="block">Invite For Talk</a>
                                <a href="" className="block">Invite For an Interview</a>
                                <a href="" className="block">Media and Public Interaction</a>
                                <a href="" className="block">Contact Us</a>
                                <a href="" className="block">Donate</a>
                            </div>

                            <div className="mx-4 pb-4 border-b-[1px] border-slate-200 space-y-3">
                                <a href="" className="block">Video Series</a>
                                <a href="" className="block">My eBooks</a>
                                <a href="" className="block">Recorded Sessions</a>
                                <a href="" className="block">My Cart</a>
                                <a href="" className="block">My Donations</a>
                                <a href="" className="block">My Orders</a>
                                <a href="" className="block">Scholarship Requests</a>
                            </div>

                            <div className="mx-4 pb-4 border-b-[1px] border-slate-200 my-4">
                                <ul className="space-y-3">
                                    <li className="font-medium block uppercase">More</li>
                                    <li>
                                        <a href="" className="block">PrashantAdvait Foundation</a>
                                    </li>
                                    <li>
                                        <a href="" className="block">Ghar Ghar Upnishad</a>
                                    </li>
                                    <li>
                                        <a href="" className="block">About Acharya Prashant</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mx-4 pb-4 border-b-[1px] border-slate-200 space-y-3">

                                <ul className="space-y-3">
                                    <li className="font-medium block uppercase">Explore Categories</li>
                                    {
                                        fewerElement.map((elem) =>
                                        {
                                            const {english} = elem.name;
                                           return(
                                            <>
                                                <li className="pointer-events-none">
                                                    <a href="" className="block">{english}</a>
                                                </li>
                                            </>
                                           )
                                        })
                                    }
                                </ul>

                                <ul className="space-y-3">
                                        {
                                            showMore ? moreElement.map((elem) =>
                                            {
                                                const {english} = elem.name;
                                                return(
                                                    <li>
                                                        <a href="" className="block">{english}</a>
                                                    </li>
                                                )
                                            }) : ""
                                        }
                                        <li>
                                            <button className="text-header-hover-color" onClick={showMoreFunction}>
                                                {
                                                    showMoreText ? "Show more..." : "...less"
                                                }
                                            </button>
                                        </li>
                                </ul>

                            </div>

                        </div>

                        <div className="sticky bottom-0 bg-gray-100 items-end">
                            <a href="" className="block w-full py-3 text-center text-header-hover-color font-medium">
                                <span>Logout</span>
                            </a>
                        </div>
                    </div>

                </div>

                
            </div>
        </>
    )
};

export default DesktopMenu;