    //context api
    //it is used for storing the data
    //than provide the data
    //than consumer uses the data
    import React, {useContext,useEffect,useState} from 'react';





    //context(wareHouse)
    //Provider----> Delivery 
    //consumer -->> you are the consumer

    const API_URL=`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;


    //Step 1 created the warehouse to store the data
    const AppContext=React.createContext();


    //Step 2 Provide the data from the context api

    const AppProvider=({children})=>{
        const [loading, setloading] = useState(true);
        const [movie, setmovie] = useState([]);
        const [isError, setisError] = useState({show:"false" ,msg:""});
        const [query, setquery] = useState("titanic");


        const getMovies= async(url)=>{
            setloading(true);
            try {
                
                const res= await fetch(url);
                const data = await res.json();
                console.log(data);
                if(data.Response === 'True'){
                    
                    setloading(false);
                    setisError({
                        show:"false",
                        msg:"",
                    });
                    setmovie(data.Search);
                    
                }
                else{
                    setisError({
                        show:"true",
                        msg:data.Error,
                    });
                }




            } catch (error) {
                console.log(error);
            }

        }


        useEffect(() => {
         let timeOut=   setTimeout(()=>{

                getMovies(`${API_URL}&s=${query}`);
            },800)
        return ()=> clearTimeout(timeOut);
        }, [query])
        


    return <AppContext.Provider value={{movie,isError,loading,query,setquery}}>{children}</AppContext.Provider>
    };

    //Create global custom hooks

    const useGlobalContext = ()=>{
        return useContext(AppContext)
    };


    export {AppContext,AppProvider,useGlobalContext};