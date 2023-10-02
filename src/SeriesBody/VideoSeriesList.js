import useGetData from "./usegetdata"

const VideoSeriesList = () =>
{

    const videoList = useGetData();

    if(!videoList)
    {
        return("Loading..")
    }
    return(
        <>
            <div className="m-2 border-b-2 mx-4">
                <span className="text-lg h-12 w-full font-poppins font-medium">Video Series ({videoList.courses.length})</span>
            </div>
        </>
    )
};

export default VideoSeriesList;