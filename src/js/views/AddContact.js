import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState();
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [adress, setAdress] = useState("");

	return (
		<div className="container mt-10">
			<h1 className="text-center">Add contact</h1>
			<form>
				<div className="mb-2">
					<label>Full Name</label>
					<input type="text" className="form-control" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} required />
				</div>
				<div className="mb-2">
					<label>Email</label>
					<input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
				</div>
				<div className="mb-2">
					<label>Phone</label>
					<input type="tel" className="form-control" id="inputPhone" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} required />
				</div>
				<div className="mb-2">
					<label>Adress</label>
					<input type="text" className="form-control" id="inputAdress" placeholder="Enter adress" onChange={(e) => setAdress(e.target.value)} required />
				</div>

				<Link to="/">
					<button type="submit" className="btn btn-primary w-100" onClick={() => actions.createContact(fullName, email, phone, adress)}>Save</button>
				</Link>

			</form>
			<br />
			<Link to="/"><button type="submit" className="btn btn-primary w-100">Get back to contacts</button></Link>
		</div>
	);
};

export default AddContact
