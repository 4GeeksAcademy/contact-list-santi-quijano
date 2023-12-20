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
				<div className="col-md-9">

				</div>
				<div className="col-md-3">
					<Link to="/post-contact"><button className="btn btn-success btn-block">Add New Contact</button></Link>
				</div>
			</div>
			{store.agenda ? (
				<div className="row mt-4">
					{store.agenda.map((contact, index) => (
						<ContactCard key={index} {...contact} />
					))}
				</div>
			) : (
				<p className="text-muted">No contacts avaiable</p>
			)}
		</div>
	)
}

export default Home;


