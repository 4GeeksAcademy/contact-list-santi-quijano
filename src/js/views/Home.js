import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";
import "../../styles/home.css"


const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-9">

				</div>
				<div className="col">
					<Link to="/add-contact">
					<button className='btn btn-success '> Add New Contact </button>
                  </Link>
                </div>
            </div>
            {store.agenda && store.agenda.map((contact,index)=>(
            <ContactCard key={index} name={contact.fullName} phone={contact.phone} img={contact.address}  email={contact.email} address={contact.address} index={index} id={contact.id} />))
}
	</div>
  )
}


export default Home