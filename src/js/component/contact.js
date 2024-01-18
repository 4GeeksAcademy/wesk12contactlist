import React, { useContext, Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

 const deleteContact = (contact_id) => {
        
            fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`,{ 
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                  },
                }
            )
            .then(resp => {
                if (resp.status >= 200 && resp.status < 300){
                    console.log("This is your request");
                    return (resp.json());
                }else{
                    console.log(`Error ${resp.status} Request`);
                }
                
                console.log(store.contacts)
                
                return(resp.json());
            })  
            .catch(error => {
               
                console.error(error);
                console.log('F')
            });
        }

        
const Contact = ({item,index}) =>{
    
    const { store, actions } = useContext(Context);

    


    return(
        <div className="container-fluid mx-12">
            <div className="row mx-5 border border-dark border-opacity-25">
                {/* <div className="col-1"></div>  onClick={deleteContact(item.id)}*/}
                <div className="col-md-5 ms-1 rounded-circle"><img src={rigoImage} className="rounded-5 img-fluid d-inline" style={{height:"auto"}}/></div>
                <div className="col-md-6 d-inline">
                    <div className="row d-flex">
                        <div className="col-md-8 py-3 flex-grow-1">Name:{' '}{item.full_name}</div>
                        <div className="col-6 col-md-2 my-2 ms-5 me-0 text-end d-flex justify-content-end">
                        <Link to={`/single/${item.id}`}>
                            <p className=" m-2 fs-5 link-dark" ><i className=" fa fa-light fa-pen"/> </p>
                        </Link> 
                        <a className=" m-2 fs-5 link-dark" onClick={()=>{
                                deleteContact(item.id)
                                {console.log(store.contacts)}
                            }} > <i className="fa fa-regular fa-trash" /></a>                      
                        </div>
                        <p>Address:{' '}{item.address}</p>
                        <p>Phone:{' '}{item.phone}</p>
                        <p>Email:{' '}{item.email}</p>
                                
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Contact;