import React,{useContext,useState,useEffect} from 'react';

const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext=React.createContext();


export const AppProvider=({children})=>{
    const [searchtext,setSearchText]=useState('a');
    const[loading,setLoading]=useState(true);
    const[cocktails,setCocktails]=useState([]);

    const fetchData=async()=>{
        setLoading(true);
        try {
            const response=await fetch(`${url}${searchtext}`);
            const result=await response.json();
            const{drinks}=result;
            setCocktails(drinks);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[searchtext])

    return <AppContext.Provider value={{loading,setSearchText,cocktails}}>{children}</AppContext.Provider>
}


export const useGlobalContext=()=>{
    return useContext(AppContext);
}