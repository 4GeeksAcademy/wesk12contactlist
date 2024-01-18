import React, { useContext }from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Contact from "../component/contact";
import { Context } from "../store/appContext";

const Home = () => {
	const { store, actions } = useContext(Context);
	return(
		<div>
			<div className = "container-fluid">
					{store.contacts.map((item, index) => {
						return(<Contact key={index} item={item} index ={index}/>		)
					})}			
				</div>
		</div>
	)
	};
export default Home;
