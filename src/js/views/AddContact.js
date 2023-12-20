import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({});
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	return (
		<div className="container mt-10">
			<h1 className="text-center">Add contact</h1>
			<form>
				<div className="mb-2">
					<p>Full Name</p>
					<input type="text" className="form-control" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} />
				</div>
				<div className="mb-2">
					<p>Email</p>
					<input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="mb-2">
					<p>Phone</p>
					<input type="tel" className="form-control" id="inputPhone" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} />
				</div>
				<div className="mb-2">
					<p>Address</p>
					<input type="text" className="form-control" id="inputAddress" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} />
				</div>

				<Link to="/">
					<button type="submit" className="btn btn-primary w-100" onClick={() => actions.postContact(fullName, email, phone, address)}>Save</button>
				</Link>

			</form>
			<br />
			<Link to="/"><button type="submit" className="btn btn-primary w-100">Get back to contacts</button></Link>
		</div>
	);
};

export default AddContact
