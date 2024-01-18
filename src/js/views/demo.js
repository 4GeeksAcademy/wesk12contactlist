import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useFormContext } from "../store/formContext";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setaddress] = useState("");

		const handleSubmit = async (event) => {
			event.preventDefault(); 
			const contactData = {
				full_name: fullName,
				email: emailAddress,
				phone: phoneNumber,
				address: address,
			};
		
			actions.createAgenda(contactData); 
			setFullName("");
			setEmailAddress("");
			setPhoneNumber("");
			setaddress("");

		};
		

	return (
		<div className="container">
			<h1>Add new contact</h1>
			<div>
				
				<form method="GET" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label className="form-label">Full Name:</label>
						<input type="text" className="form-control" name="full_name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
					</div>

					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input type="email" className="form-control" name="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>	
					</div>
					
					<div className="mb-3">
						<label className="form-label">Phone:</label>
						<input type="number" className="form-control" name="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
					</div>

					<div className="mb-3">
						<label className="form-label">Address:</label>
						<input type="text" className="form-control" name="address" value={address} onChange={(e) => setaddress(e.target.value)}/>
					</div>
					<br />
					<div className="d-grid">
						<button className="btn btn-primary" type="submit">Save</button>
					</div>
				</form>
			</div>
			<br />
			<Link to="/">
				<a>Click to go back</a>
			</Link>
		</div>
	);
};

export default Demo;