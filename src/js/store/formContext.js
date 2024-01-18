import React,{ createContext, useState , useContext} from "react";
const formContext = createContext();

export const useFormContext = () => {
    return useContext(formContext);
};

export const FormProvider = ({children}) => {
    const [formData, setFormData] = useState({});
        const updateFormData = (newData) =>{
            setFormData({...formData,...newData});
        };


const sendDataToIPA = async () =>{
    try{
        const response = await fetch('https://playground.4geeks.com/apis/fake/contact/',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(formData),
        })
        .then((data)=>data.json())
        .then((data)=> setFormData({contacts: data}))
       
    } catch(error){
        console.error(error);
    }
};

return (
    <formContext.Provider value={{formData, updateFormData, sendDataToIPA}}>
        {children}
    </formContext.Provider>
)
};