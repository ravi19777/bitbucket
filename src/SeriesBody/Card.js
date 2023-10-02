// import { useState } from "react";
import useGetData from "./usegetdata";

const Card = () => {
  const cardData = useGetData();

  // const [time,setTime] = useState(
  //     {
  //         hr: "",
  //         min: ""
  //     }
  // )

  if (!cardData) {
    return <p>Loading.......</p>;
  }

  const cardDataArr = cardData.courses;

  // const timeConverter = (time) =>
  // {
  //     const hr = Math.floor(time/60);
  //     const min = time % 60;
  //     setTime(
  //         {
  //             hr: hr,
  //             min: min
  //         }
  //     )
  // }

  return (
    <div className="flex flex-wrap h-auto mx-4 sm:flex sm:flex-wrap">
        {/* <div id="card-wrapper" className="md:flex flex-wrap mx-4 border-2 border-green-400"> */}
      {cardDataArr.map((elem, index) => {
        const {
          id,
          title,
          subtitle,
          courseHours,
          amount,
          originalAmount,
          thumbnail,
          language,
        } = elem;
        hr = Math.floor((courseHours * 60) / 60);
        min = Math.round((courseHours * 60) % 60);

        return (
          <div
            key={id}
            className="sm:w-1/2 sm:flex sm:flex-wrap lg:w-1/3"
          >

        <div className="w-min-fit w-full border-b-2 pb-4 pt-2 font-devnagri font-medium hover:bg-blue-100 hover:border-none cursor-pointer mx-2 rounded p-4">
            <div className="space-y-2 w-fit px-2 py-1 rounded text-white my-2 bg-gray-400 text-sm font-medium">
              <span>भाग {index + 1}</span>
            </div>

            <div className="w-full py-2 font-medium text-lg leading-normal">
              <h3 className="w-full">{title}</h3>
            </div>

            <div className="text-sm text-gray-500">
              <p>{subtitle}</p>
            </div>

            <div className="text-sm text-gray-500">
              <p>{`${hr} hours ${min} minutes`}</p>
            </div>

            <div className="text-sm text-gray-500">
              <span>Contribution:</span>
              <span>{amount}</span>
              <span>{originalAmount}</span>
            </div>

            <div className="bg-blue-300 w-fit px-2 rounded my-1">
              <span className="capitalize text-sm text-gray-500">
                {language}
              </span>
            </div>

            <div className="my-2">
              <span className="mr-4">
                <button className="text-header-hover-color">Add to cart</button>
              </span>
              <span className="pl-4 border-l-[1px] border-header-hover-color">
                <button className="text-header-hover-color">Enroll</button>
              </span>
            </div>
          </div>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default Card;
