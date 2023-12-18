const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			agenda: [],
			contact: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
		},
		getMyAgenda: async () => {
			const getUrl = 'https://playground.4geeks.com/apis/fake/contact/agenda/Mermate'
			fetch(getUrl).then(response=>response.json()).then(data=>{
				setStore({ agenda: data});
			})
			.catch(error=>{
				console.error("There was an error while fetching the agenda, try again:", error);
			});
		},
		postContact: async (fullName, email, phone, address) => {
			try {
				const store = getStore();
				const addContact = {
					fullName: fullName,
					email: email,
					agenda_slug: 'Mermate',
					phone: phone,
					adress: address
				};
				const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', {
					method: "POST",
					body: JSON.stringify(addContact),
					headers: {"Content-Type": "application/json"}
				});
				if (response.ok) {
					console.log("Contact successfully created!");
				} else {
					console.error("There was an error while creating your contact, try again:", response.status);
				}
			} catch (error) {
				console.error("There was an error in your solicitude, try again:", error)
			}
		},
		putContact: (fullName, email, phone, address, id) => {
			const updateContact = {
				fullName: fullName,
				email: email,
				agenda_slug: 'Mermate',
				phone: phone,
				address: address
			}
			try {
				const response = fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`,{
					method: "PUT",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(updateContact)
				});
				if(response.ok) {
					console.error("Contact successfully updated!");
				} else {
					console.error("There was an error while updating your contact, try again:", response.status);
				}
			} catch (error) {
			console.error("There was an error in your solicitude:", error);
		}
		actions.getMyAgenda() 
	 	},
		getContact: (id) => {
			const contactUrl = `https://playground.4geeks.com/apis/fake/contact/${id}`
			fetch(contactUrl).then(response=> response.json()).then(data=>{
				setStore({ contact: data});
				console.log(data)
			})
			.catch(error=>{
				console.error("Error fetching contact:", error);
			});
			getContact: (index) => {
				const store = getStore();
				setStore({ contact: store.agenda[index]})
				console.log(store.contact)
			}
		},
			
	};
};

export default getState;

