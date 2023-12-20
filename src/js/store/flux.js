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
			getAgenda: () => {
				const getUrl = 'https://playground.4geeks.com/apis/fake/contact/agenda/Mermate'
				fetch(getUrl).then(response => response.json()).then(data => {
					setStore({ agenda: data });
				})
					.catch(error => {
						console.error("There was an error while fetching the agenda, try again:", error);
					});
			},
			postContact: async (fullName, email, address, phone) => {
				try {
					const store = getStore();
					const addContact = {
						fullName: fullName,
						email: email,
						agenda_slug: 'Mermate',
						address: address,
						phone: phone
					};
					const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', {
						method: "POST",
						body: JSON.stringify(addContact),
						headers: { "Content-Type": "application/json" }
					});
					if (response.ok) {
						console.log("Contact successfully created!");
						actions.getAgenda();
					} else {
						console.error("There was an error while creating your contact, try again:", response.status);
					}
				} catch (error) {
					console.error("There was an error in your request, try again:", error)
				}
			},
			putContact: async (fullName, email, address, phone, id) => {
				const updateContact = {
					fullName: fullName,
					email: email,
					agenda_slug: 'Mermate',
					address: address,
					phone: phone
				}
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(updateContact)
					});
					if (response.ok) {
						console.log("Contact successfully updated!");
						actions.getAgenda();
					} else {
						console.error("There was an error while updating your contact, try again:", response.status);
					}
				} catch (error) {
					console.error("There was an error in your request:", error);
					actions.getAgenda()
				}
			},
			getContact: (id) => {
				const contactUrl = `https://playground.4geeks.com/apis/fake/contact/${id}`
				fetch(contactUrl).then(response => response.json()).then(data => {
					setStore({ contact: data });
					console.log(data)
				})
					.catch(error => {
						console.error("Error fetching contact:", error);
					});
			},
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" }
					});
					if (response.ok) {
						console.log("Contact successfully deleted!");
					} else {
						console.error("There was an error while deleting a contact, try again:", response.status);
					}
				} catch (error) {
					console.error("There was a error in the request, try again:", error)
					actions.getAgenda()
				}
			}
		},
	};
};

export default getState;

