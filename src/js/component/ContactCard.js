import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import "../../styles/index.css"

export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <nav className="navbar navbar-light mb-3">
                <div className="ml-auto">
                </div>
            </nav>
            <div className="contact-profile d-flex">
                <img className="contact-picture" src="https://placehold.co/500x500" />
                <div className="contact-info">
                    <p className="contact-name">{props.full_name}
                        <span className="d-flex gap-3">
                            <button><i className="fa-solid fa-pencil"></i></button><button><i className="fa-solid fa-trash"></i></button>
                        </span>
                    </p>
                    <p className="street-adress text-muted"><i className="fa-solid fa-location-dot"></i>&nbsp;{props.address}</p>
                    <p className="contact-number text-muted"><i className="fa-solid fa-phone"></i>&nbsp;{props.phone}</p>
                    <p className="email-direction text-muted"><i className="fa-solid fa-envelope"></i>&nbsp;{props.email}</p>
                </div>
            </div>
        </div>
    )
};
export default ContactCard;