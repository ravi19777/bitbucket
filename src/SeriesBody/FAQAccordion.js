import { useState } from "react";
import useGetData from "./usegetdata";

const FAQAccordion = ({question,answer}) =>
{

    const [showAnswer,setShowAnswer] = useState(false);
    const [expandMoreIconValue,setExpandMoreIconValue] = useState(true);

    const showAnswerFun = () =>
    {
        setShowAnswer(!showAnswer);

        setExpandMoreIconValue(!expandMoreIconValue);
    }

    return(
        <>
            <div className="mx-4 border-b-[1px] border-slate-200 font-poppins">
                            <div className="w-full h-auto flex justify-between align-middle my-2 cursor-pointer" onClick={event => showAnswerFun(event)}>
                                <p className="font-bold text-slate-600">{question}</p>
                                {
                                    expandMoreIconValue ? <span className="material-symbols-outlined flex items-center h-full text-slate-400 hover:text-slate-800">
                                                                                expand_more
                                                                            </span> : <span className="material-symbols-outlined text-slate-400 hover:text-slate-800">
                                                                                                expand_less
                                                                                            </span>
                                }

                                
                            </div>
                            <div>
                                <p className={showAnswer?"my-4 text-slate-500":"hidden"}>{answer}</p>
                            </div>
                        </div>
        </>
    )
};

export default FAQAccordion;