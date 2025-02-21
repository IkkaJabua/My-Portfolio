import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

function Contacts() {
    const [listContacts] = useState([
        {
            title: 'Phone Number',
            value: '+995597712212',
            link: 'tel:+995597712212'
        },
        {
            title: 'Email',
            value: 'jabuairakli8@gmail.com',
            link: 'mailto:jabuairakli8@gmail.com'
        },
        {
            title: 'Instagram',
            value: 'jj22bu88a',
            link: 'https://www.instagram.com/jj22bu88a'
        },
        {
            title: 'LinkedIn',
            value: 'Irakli Jabua',
            link: 'https://www.linkedin.com/in/irakli-jabua-22301a33b/'
        }
    ]);

    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    return (
        <section className='contacts' ref={scrollTab}>
            <div className="title" ref={(el) => el && divs.current.push(el)}>
                This is my Contacts
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
                Feel free to reach out to me for any collaboration, freelance projects, or just to connect. Below are my contact details. Looking forward to hearing from you!
            </div>
            <div className="list" ref={(el) => el && divs.current.push(el)}>
                {listContacts.map((contact, key) => (
                    <div className='item' key={key}>
                        <h3>{contact.title}</h3>
                        <div>
                            <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                {contact.value}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Contacts;
