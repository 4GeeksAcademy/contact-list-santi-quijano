import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<nav className="navbar navbar-light mb-3">
				<Link to="/">
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button style={{ marginRight: "10px" }} className="btn btn-success ">Add new contact</button>
					</Link>
				</div>
			</nav>
			<div className="d-flex">
				<img src="https://placehold.co/600x400" />
				<div className="contact-info">
					<p className="contact-name">Mike Anamendolla</p>
					<p className="street-adress">5842 Hillcrest Red</p>
					<p className="contact-number">(870) 288-4149</p>
					<p className="email-direction">mike.ana@example.com</p>
				</div>
			</div>
		</div>
	)
};



