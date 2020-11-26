import React from 'react';
import ContactCardEnd from './05-End-ContactCard';
const ContactEnd = () => {
    return (
        <div className="contacts">
           <ContactCardEnd 
                name="Harry Pawter" 
                picture="https://placedog.net/300/200?id=43" 
                phone="212123234" 
                email="hi@dog.com"
            />
            <ContactCardEnd 
                name="Jimmy Chew" 
                picture="https://placedog.net/300/200?id=22" 
                phone="(212)123456" 
                email="hi@jimmy.com"
            />
            <ContactCardEnd
                name="Bark Wahlberg" 
                picture="https://placedog.net/300/200?id=66" 
                phone="(212) 555-3456" 
                email="bark@facebook.woof" 
            />
            <ContactCardEnd 
                name="Indiana Bones" 
                picture="https://placedog.net/300/240?id=3" 
                phone="(212) 555-5678" 
                email="indiana.bones@hotmail.com" 
            />
           
        </div>
    );
}
export default ContactEnd;