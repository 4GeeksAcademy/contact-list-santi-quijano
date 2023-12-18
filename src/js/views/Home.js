import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";
import "../../styles/home.css"

const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-9">

				</div>
				<div className="col">
					<Link to="/add-contact"><button className="btn btn-success">Add New Contact</button></Link>
				</div>
			</div>
			{store.agenda ? (
				<div className="row mt-3">
					{store.agenda.map((contact, index) => (
						<ContactCard key={index} {...contact} />
					))}
				</div>
			) : (
				<p>No contacts avaiable</p>
			)}
		</div>
	)
}

export default Home


