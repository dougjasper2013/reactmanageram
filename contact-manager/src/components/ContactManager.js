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
    <div className="container">
      <h2 className="my-4">Contact Manager</h2>
      
      <div className="mb-4">
        <div className="mb-3">
          <label htmlFor="contactName" className="form-label">Contact Name</label>
          <input
            type="text"
            className="form-control"
            id="contactName"
            placeholder="Enter contact's name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactEmail" className="form-label">Contact Email</label>
          <input
            type="email"
            className="form-control"
            id="contactEmail"
            placeholder="Enter contact's email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>
        <button onClick={addContact} className="btn btn-primary">Add Contact</button>
      </div>

      <div>
        <h3>Contacts List</h3>
        <ul className="list-group">
          {contacts.map((contact, index) => (
            <li key={index} className="list-group-item">
              <strong>{contact.name}</strong> - {contact.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactManager;
