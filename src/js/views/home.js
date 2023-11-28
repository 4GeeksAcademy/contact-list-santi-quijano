import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{
				store.agenda.map((value, index) => {
					return <ContactCard contact={value} key={value.id} />
				})
			}
		</>
	)
};



