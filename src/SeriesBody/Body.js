// import MenuContainer from "../Menu/MenuContainer";
import useConnection from "../useConnection";
import Card from "./Card";
import FAQ from "./FAQ";
import OtherSeries from "./OtherSeries";
import SeriesDetails from "./SeriesDetails";
import ShareOptions from "./ShareOptions";
import VideoSeriesList from "./VideoSeriesList";

const Body = () =>
{

    const connection = useConnection();

    // console.log(connection);
    return(
        <div className="">
            <SeriesDetails />
            <ShareOptions />
            <VideoSeriesList />
            <Card />
            <OtherSeries />
            <FAQ />
        </div>
    )
};

export default Body;