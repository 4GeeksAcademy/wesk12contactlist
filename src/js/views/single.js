import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [contact,setContact] = useState(store.contacts.find((item)=>item.id==params.theid))
	

	const editContact= async () => {
		try{
			let response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`,{ 
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                  },
				  body:JSON.stringify({
					"full_name": contact.full_name,
					"email": contact.email,
					"agenda_slug": contact.agenda_slug,
					"address": contact.address,
					"phone":contact.phone
				  })
				  
                }
            )
			if (response.status==201){
				alert("success")
			}
			else{
				alert("an error ocurred while saving")
			}
		}
		catch(error){console.log(error)}

		
	};

	return (
		<div className="container">
			<h1>Change contact</h1>
			<div>
				<div >
					<div className="mb-3">
						<label className="form-label">Full Name:</label>
						<input type="text" onChange={(e)=>{setContact({...contact, full_name:e.target.value})}} value={contact.full_name}className="form-control" name="full_name" />
					</div>
					
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input type="email" onChange={(e)=>{setContact({...contact, email:e.target.value})}} value={contact.email}className="form-control" name="email"/>	
					</div>
					
					<div className="mb-3">
						<label className="form-label">Phone:</label>
						<input type="number" onChange={(e)=>{setContact({...contact, phone:e.target.value})}} value={contact.phone} className="form-control" name="phone"/>
					</div>

					<div className="mb-3">
						<label className="form-label">Address:</label>
						<input type="text" onChange={(e)=>{setContact({...contact, address:e.target.value})}} value={contact.address}className="form-control" name="address"/>
					</div>
					<br />
					<div className="d-grid">
						<button className="btn btn-primary" onClick={()=>editContact()} >Save</button>
					</div>
				</div>
			</div>
			<br />
			<Link to="/">
				<a>Contacts</a>
			</Link>
		</div>
	);
		
};