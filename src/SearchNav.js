import { useState } from "react";

const SearchNav = () =>
{

    const [searchBarVisibility,setSearchBarVisibility] = useState(false);

    const showSearchBarFunction = () =>
    {
        setSearchBarVisibility(!searchBarVisibility);
    }

    return(
        <>
            <div className="h-14 flex px-4 py-2 align-middle justify-between border-b-[1px] border-gray-300 bg-white sticky top-0 opacity-100">
                <div className="h-full flex items-center">
                    <img src="https://acharyaprashant.org/images/ic_videoseries.png" alt="" className="h-6"/>
                    <div className="hidden lg:flex ml-10 border-[1px] border-slate-400 align-middle justify-center rounded h-full">
                        <button className="h-full flex items-center px-2 text-slate-500 border-r-[1px] border-slate-400 font-medium">
                            <span className="h-full text-sm flex items-center">All</span>
                            <span className="material-symbols-outlined flex items-center">
                                arrow_drop_down
                            </span>
                        </button>
                        <input type="search" name="" placeholder="Search for video series" className="text-sm outline-none w-[400px] pl-2"/>

                        <div className="pr-4 flex items-center pl-4 bg-slate-200 cursor-pointer">
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                        </div>
                    </div>
                </div>

                <div className="flex h-full align-middle">
                    <div className=" lg:hidden" onClick={showSearchBarFunction}>
                        <span className="material-symbols-outlined mr-5 mt-1 items-center fill-current h-fit w-fit flex">
                            search
                        </span>
                    </div>
                    <button className="bg-header-hover-color px-2 rounded text-white text-sm font-medium">My Video Series</button>
                </div>

                <div className={searchBarVisibility? "flex min-w-full border-2 items-center pl-4 absolute top-0 left-0 my-auto h-full bg-white" :"hidden"}>
                    <span className="material-symbols-outlined mr-5 mt-1 items-center fill-current h-fit w-fit flex" onClick={showSearchBarFunction}>
                        arrow_back
                    </span>
                    <input type="text" placeholder="Enter Your Search" className="h-full w-full outline-none text-sm" />
                </div>
            </div>

            
        </>
    )
};

export default SearchNav;