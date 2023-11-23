import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-10">
			<h1 className="text-center">Add a new contact</h1>
			<form>
				<div className="mb-2">
					<label for="inputFullName" className="form-label">Full Name</label>
					<input type="text" className="form-control" id="inputFullName" placeholder="Full Name" />
				</div>
				<div className="mb-2">
					<label for="inputEmail" className="form-label">Email</label>
					<input type="email" className="form-control" id="inputEmail" placeholder="Enter email" />
				</div>
				<div className="mb-2">
					<label for="inputPhone" className="form-label">Phone</label>
					<input type="tel" className="form-control" id="inputPhone" placeholder="Enter phone" />
				</div>
				<div className="mb-2">
					<label for="inputAdress" className="form-label" placeholder="Full Name">Adress</label>
					<input type="text" className="form-control" id="inputAdress" placeholder="Enter adress" />
				</div>
				<button type="submit" className="btn btn-primary w-100">save</button>
			</form>
			<br />
			<Link to="/">or get back to contacts</Link>
		</div>
	);
};
