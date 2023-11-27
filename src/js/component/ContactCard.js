import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/ContactCard.css";
export const ContactCard = ({ contact }) => {
    return (
        <div>
            <nav className="navbar navbar-light mb-3">
                <Link to="/">
                </Link>
                <div className="ml-auto">
                    <Link to="/addContact">
                        <button type="button" class="btn btn-info" style={{ float: "right", marginRight: "50px" }}>Add new contact</button>
                    </Link>
                </div>
            </nav>
            <div className="contact-profile d-flex">
                <img className="contact-picture" src="https://placehold.co/500x500" />
                <div className="contact-info">
                    <p className="contact-name">{contact.full_name}
                        <span className="update-delete d-flex gap-3">
                            <button><i className="fa-solid fa-pencil"></i></button><button><i className="fa-solid fa-trash"></i></button>
                        </span>
                    </p>
                    <p className="street-adress text-muted"><i className="fa-solid fa-location-dot"></i>&nbsp;{contact.address}</p>
                    <p className="contact-number text-muted"><i className="fa-solid fa-phone"></i>&nbsp;{contact.phone}</p>
                    <p className="email-direction text-muted"><i className="fa-solid fa-envelope"></i>&nbsp;{contact.email}</p>
                </div>
            </div>
        </div>
    )
};