const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts : [
				{
					full_name:'',
					email:'',
					phone:'',
					address:'',
					id:'',
					agenda_slug: "Wesley"
				}
			],
		},
		actions: {
			loadData:() => {
				const store = getStore();
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Wesley")
				.then((res)=> res.json())
				.then((data)=> setStore({contacts: data}))
				.catch((err)=> console.error(err))
			},

		sendDataToIPA: async (contactData) =>{
			try{
					const response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/Wesley',{
						method:'POST',
						headers:{
							'Content-type':'application/json',
						},
						body:JSON.stringify(contactData),
					})
					.then((data)=>data.json())
					.then((data)=> setFormData({contacts: data}))
					
				} catch(error){
					console.error(error);
				}
			},			

		createAgenda: async (contactData) => {
			const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', {
				method: 'POST',
				headers:{
					'Content-type':'application/json',
				},
					body:JSON.stringify({
						...contactData,
						agenda_slug:"Wesley"
					})
			})
		}
			}
		}
	};


export default getState;