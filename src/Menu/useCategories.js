import { useEffect, useState } from "react"

const useCategories = () =>
{

    const [categories,setCategories] = useState();

    useEffect(() =>
    {
        categoriesFetchingFunction();
    },[]);

    const categoriesFetchingFunction = async () =>
    {
        const categories = await fetch('https://api.acharyaprashant.org/v2/legacy/courses/tags');

        const categoriesData = await categories.json();

        setCategories(categoriesData);
    }

    return categories;
};

export default useCategories;