import React from 'react';


const ContactCardEnd = (props) => {
    return (
        <div className="contact-card">
            <img src={props.picture} alt="Dog"/>
            <h3> {props.name}</h3>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default ContactCardEnd