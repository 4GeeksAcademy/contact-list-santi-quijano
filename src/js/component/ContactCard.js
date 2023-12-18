import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <nav classNameName="navbar navbar-light mb-3">
                <Link to="/">
                </Link>
                <div classNameName="ml-auto">
                    <Link to="/addContact">
                        <button type="button" classNameName="btn btn-info" style={{ float: "right", marginRight: "50px" }}>Add new contact</button>
                    </Link>
                </div>
            </nav>
            <div classNameName="contact-profile d-flex">
                <img classNameName="contact-picture" src="https://placehold.co/500x500" />
                <div classNameName="contact-info">
                    <p classNameName="contact-name">{props.full_name}
                        <span classNameName="update-delete d-flex gap-3">
                            <button><i classNameName="fa-solid fa-pencil"></i></button><button><i classNameName="fa-solid fa-trash"></i></button>
                        </span>
                    </p>
                    <p classNameName="street-adress text-muted"><i classNameName="fa-solid fa-location-dot"></i>&nbsp;{props.address}</p>
                    <p classNameName="contact-number text-muted"><i classNameName="fa-solid fa-phone"></i>&nbsp;{props.phone}</p>
                    <p classNameName="email-direction text-muted"><i classNameName="fa-solid fa-envelope"></i>&nbsp;{props.email}</p>
                </div>
            </div>
        </div>
    )
};
export default ContactCard 