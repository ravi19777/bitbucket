import Footer from "./Footer";
import SearchNav from "./SearchNav";
import Body from "./SeriesBody/Body";
import SubHeader from "./Subheader";
import Header from "./MainHeader";
import useConnection from "./useConnection";
import NoConnection from "./NoConnection";

const App = () =>
{

    const connectionStatus = useConnection();

    if(!connectionStatus)
    {
        return(
            <NoConnection />
        )
    }

    return(
        <div className="w-full box-content">
            <Header />
            <SubHeader />
            <SearchNav />
            <Body />
            <Footer />
        </div>
    )
};

export default App;
