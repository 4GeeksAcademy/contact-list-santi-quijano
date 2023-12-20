import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className='contact-card-container mb-4'>
            <div className="contact-profile d-flex">
                <img className="contact-picture" src="https://placehold.co/500x500" alt="Profile picture" />
                <div className="contact-info">
                    <h3 className="contact-name">{props.full_name}</h3>
                    <p className="street-adress contact-detail text-muted"><i className="fa-solid fa-location-dot"></i>&nbsp;{props.address}</p>
                    <p className="contact-number contact-detail text-muted"><i className="fa-solid fa-phone"></i>&nbsp;{props.phone}</p>
                    <p className="email-direction contact-detail text-muted"><i className="fa-solid fa-envelope"></i>&nbsp;{props.email}</p>
                    <div className='d-flex justify-content'>
                        <Link to="/put-contact" onClick={() => {
                            actions.getContact(props.id)
                        }}><i className="btn btn-sm btn-outline-secondary fa-solid fa-pencil fa-fw"></i></Link>
                    </div>
                    <i className="fa-solid fa-trash fa-fw btn btn-sm btn-outline-secondary text-danger" onClick={() => {
                        if (window.confirm("Are you sure you wanna delete this contact?")) {
                            actions.deleteContact(props.id);
                            window.location.reload()
                        }
                    }}></i>
                </div>
            </div>
        </div>
    )
};
export default ContactCard;


