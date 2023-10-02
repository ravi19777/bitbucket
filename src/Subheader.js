const SubHeader = () =>
{
    return(
        <>
            <div className="flex justify-center align-middle text-white h-fit px-4 py-2 bg-sub-header-color">
                <span className="w-5 h-4 sm:w-4 bg-header-color border-[1.5px] border-white rounded-full m-1 mr-2"></span>
                <div className="flex items-center h-full">
                    <h3>Get access to all 350+ video series at once!</h3>
                </div>

                <div className="flex items-center ml-5 border-white border-[1.5px] rounded shrink-0 h-fit px-2 py-1 my-auto">
                    <a href="" className="flex-nowrap text-sm">
                        <span className="">Click Here</span>
                    </a>
                </div>

            </div>
        </>
    )
};

export default SubHeader;