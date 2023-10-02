import { useEffect, useState } from "react"

const useGetData = () =>
{

    const [seriesData,setSeriesData] = useState(null);

    useEffect(() =>
    {
        fetchSeriesData();
    },[]);

    const fetchSeriesData = async () =>
    {
        const data = await fetch('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3');
        const finalData = await data.json();
        setSeriesData(finalData);
    }

    return seriesData;
};

export default useGetData;