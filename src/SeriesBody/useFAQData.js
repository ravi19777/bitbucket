import { useEffect, useState } from "react"

const useFAQData = () =>
{
    const [FAQData,setFAQData] = useState(null);

    useEffect(() =>
    {
        fetchFAQs()
    },[])

    const fetchFAQs = async () =>
    {
        const fetchedData = await fetch('https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english');
        const FAQs = await fetchedData.json();

        setFAQData(FAQs);
    }

    return(FAQData);
};

export default useFAQData;