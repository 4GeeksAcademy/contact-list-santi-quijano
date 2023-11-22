import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button style={{marginRight:"10px"}} className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
