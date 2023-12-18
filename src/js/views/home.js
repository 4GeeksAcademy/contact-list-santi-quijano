import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";
import "../../styles/home.css"


const home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>home</div>
	)
}

export default home