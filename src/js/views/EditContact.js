import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState(store.contact.fullName || "");
	const [email, setEmail] = useState(store.contact.email || "");
	const [phone, setPhone] = useState(store.contact.phone || "");
	const [address, setAddress] = useState(store.contact.address || "");
	const [Id, setId] = useState(store.contact.id || "");

	const handleSave = () => {
		actions.putContact(fullName, email, phone, address, Id)
	}

	return (
		<div className="container mt-10">
			<h1 className="text-center">Edit contact</h1>
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
					<label>address</label>
					<input type="text" className="form-control" id="inputaddress" placeholder="Enter address" onChange={(e) => setaddress(e.target.value)} required />
				</div>

				<Link to="/">
					<button type="submit" className="btn btn-primary w-100" onClick={handleSave}>Save</button>
				</Link>

			</form>
			<br />
			<Link to="/"><button type="submit" className="btn btn-primary w-100">Get back to contacts</button></Link>
		</div>
	);
};

export default EditContact;
