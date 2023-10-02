import { useState } from "react";
import useFAQData from "./useFAQData";
import FAQAccordion from "./FAQAccordion";

const FAQ = () =>
{

    const [showAnswer,setShowAnswer] = useState(false);

    const [expandMoreIconValue,setExpandMoreIconValue] = useState(true);

    const FAQData = useFAQData();

    if(!FAQData)
    {
        return(
            <>
                Loading....
            </>
        )
    };

    const showAnswerFun = (e,key) =>
    {
        console.log(e.target)
        setExpandMoreIconValue(!expandMoreIconValue);
        setShowAnswer(!showAnswer);
    }

    return(
        <div className="w-full bg-FAQ-background-color pt-16 px-4 font-poppins xl:flex">
            <div className="py-4 px-4 xl:w-[30%]">
                <h3 className="text-lg font-bold">FAQs</h3>
                <span className="mt-2 text-slate-500 text-lg">Can't find out the answer you're looking for?</span>
                <span className="text-slate-500 text-lg"> Reach out to the <a href="" className="text-header-hover-color">support</a> team</span>
            </div>
            <div className="xl:w-[70%]">
            {
                FAQData.map( (elem,index) =>
                {
                    const {question,answer} = elem;
                    
                    return(
                        <FAQAccordion key={index} question={question} answer={answer} />
                    )
                })
            }
            </div>
        </div>
    )
};

export default FAQ;