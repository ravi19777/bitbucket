const ShareOptions = () =>
{
    return(
        <>
            <div className="hidden">
                <div>
                    <p className="font-medium text-gray-700">Share this series:</p>
                </div>
                <div className="space-x-4">
                    <i className="fa fa-facebook text-facebook-color h-[34px] w-[19px]" aria-hidden="true"></i>
                    <i className="fa fa-twitter text-twitter-color" aria-hidden="true"></i>
                    <i className="fa fa-whatsapp text-whatsapp-color" aria-hidden="true"></i>
                    <i className="fa fa-linkedin text-linkedin-color" aria-hidden="true"></i>
                </div>
            </div>
        </>
    )
};

export default ShareOptions;