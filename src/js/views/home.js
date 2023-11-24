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
			<div className="contact-profile d-flex">
				<img className="contact-picture" src="https://placehold.co/500x500" />
				<div className="contact-info">
					<p className="contact-name">Mike Anamendolla
						<span className="update-delete">
							<i className="fa-solid fa-pencil"></i><i className="fa-solid fa-trash"></i>
						</span>
					</p>
					<p className="street-adress text-muted"><i className="fa-solid fa-location-dot"></i>&nbsp;5842 Hillcrest Red</p>
					<p className="contact-number text-muted"><i className="fa-solid fa-phone"></i>&nbsp;(870) 288-4149</p>
					<p className="email-direction text-muted"><i className="fa-solid fa-envelope"></i>&nbsp;mike.ana@example.com</p>
				</div>
			</div>
		</div>
	)
};



