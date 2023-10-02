import { useState } from "react";
import useGetData from "./usegetdata";

const SeriesDetails = () =>
{

    const [expandContainer,setExpandContainer] = useState(false);

    const [textValue,setTextValue] = useState(true);

    const seriesData = useGetData();

    if(!seriesData)
    {
        return (
            <>
                <h3>The data is under process!!</h3>
            </>
        )
    }

    const {title,subtitle,description} = seriesData.details;

    const {domain,basePath,id,key,qualities} = seriesData.details.thumbnail;

    const imagepath = `${domain}/${basePath}/${qualities[0]}/${key}`;

    const expand_container = () =>
    {
        setTextValue(!textValue);
        setExpandContainer(!expandContainer)
    }

    return(
        <div className="mx-8 font-sans-serif self-stretch">
            <div className="w-full h-10 flex items-center font-bold text-xl my-2">
                {title}
            </div>

            <div className="w-full h-auto mb-10 md:flex">
                <div className="md:w-2/5 aspect-video md:h-auto">
                    <img src={imagepath} className="rounded w-full h-auto aspect-video" alt="" />
                </div>
                <div id="seriesDetails" className="md:w-3/5 md:ml-4">
                    <div className="text-lg text-gray-600 font-bold font-devnagri my-2 md:my-0">
                        <h3>{subtitle}</h3>
                    </div>
                    <div className="description text-sm leading-6 text-slate-700 font-devnagri font-medium relative self-stretch">
                        <div className="md:hidden">
                            <p className={expandContainer? 'line-clamp-none' : 'line-clamp-2'}>{description}</p>
                        </div>
                        <p className="hidden leading-6 text-slate-700 font-medium tracking-wide text-justify md:flex">{description}</p>
                        <div className="text-header-color font-bold absolute md:hidden">
                            <span onClick={expand_container}>
                                {
                                    textValue ? "और पढ़ें" : "कम दिखाएं"
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SeriesDetails;