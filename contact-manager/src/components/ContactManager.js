import React, { useState } from 'react';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const addContact = () => {
    if (contactName && contactEmail) {
      setContacts([...contacts, { name: contactName, email: contactEmail }]);
      setContactName('');
      setContactEmail('');
    }
  };

  return (
    <div>
      <h2>Contact Manager</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>

      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactManager;
