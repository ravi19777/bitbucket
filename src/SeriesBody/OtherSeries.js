import useGetData from "./usegetdata";

const OtherSeries = () =>
{

    const otherSeriesData = useGetData();

    if(!otherSeriesData)
    {
        return(
            <>
                Loading......
            </>
        )
    };

    const relatedContentArr = otherSeriesData.relatedContent;

    const lastElem = relatedContentArr.length - 1;

    return(
        <div className="mt-4">
            <div className="h-fit mx-4 border-b-[1px] my-1 py-1">
                <h3 className="font-medium text-lg">Other Helpful Video Series</h3>
            </div>


            <div id="card-wrapper" className="md:flex flex-wrap mx-4">
            {
                relatedContentArr.map((elem,index) =>
                {
                    const {id,thumbnail,title,subtitle,coursesCount,courseHours,amount,language} = elem;

                    const {domain,basePath,key,qualities} = thumbnail;

                    {/* console.log(`${domain}/${basePath}/${qualities[1]}/${key}`); */}

                        hr = Math.floor((courseHours*60)/60 );
                        min = Math.round((courseHours * 60) % 60);

                    return(
                        <div key={id} className="md:w-1/2 md:flex md:flex-wrap hover:bg-blue-100 rounded cursor-pointer transition ease-linear delay-150">
                            <div className="flex border-b-[1px] mx-4 py-4 pt-6 w-auto font-devnagri font-medium md:w-full">
                                
                                <div className="w-2/5 aspect-video">
                                    <img src={`${domain}/${basePath}/${qualities[1]}/${key}`} alt="" className="max-w-full h-auto rounded aspect-video"/>
                                </div>
                                

                                <div className="w-3/5 ml-4">
                                    <div className="font-medium text-lg">
                                        <h3>{title}</h3>
                                    </div>

                                    <div className="text-gray-400">
                                        <span>{subtitle}</span>
                                    </div>

                                    <div className="text-gray-400">
                                        {
                                            coursesCount ? <span>{coursesCount} Video Series</span> : ""
                                        }
                                    </div>

                                    {
                                        courseHours? <div className="text-sm text-gray-500">
                                        <p>
                                            {
                                                `${hr} hours ${min} minutes`
                                            }
                                        </p>
                                    </div> : ""
                                    }

                                    {
                                        amount? <div className="text-sm text-gray-500">
                                            <span>
                                                Contribution:
                                            </span>
                                            <span>
                                                {amount}
                                            </span>
                                        </div> : ""
                                    }

                                    {
                                        index === lastElem ? <div className="bg-blue-300 w-fit px-2 rounded my-1">
                                        <span className="capitalize text-sm text-gray-500">{language}</span>
                                        </div>: ""
                                    }

                                    {
                                        index === lastElem ? <div className="my-2 text-xs">
                                        <span className="mr-4">
                                            <button className="text-header-hover-color uppercase">Add to cart</button>
                                        </span>
                                        <span className="pl-4 border-l-[1px] border-header-hover-color">
                                             <button className="text-header-hover-color uppercase">Enrol</button>
                                        </span>
                                        </div> : ""
                                    }

                                    

                                    
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
};

export default OtherSeries;