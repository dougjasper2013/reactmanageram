import React, { useState, useEffect } from 'react';

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Load contacts from localStorage when the component mounts
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  // Handle adding a new contact
  const handleAddContact = (e) => {
    e.preventDefault();
    if (name && email) {
      const newContact = { name, email };
      const updatedContacts = [...contacts, newContact];
      setContacts(updatedContacts);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      setName('');
      setEmail('');
    } else {
      alert('Please fill in both name and email.');
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">My Contacts</h2>

      {/* Add Contact Form */}
      <form onSubmit={handleAddContact} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Add Contact</button>
        </div>
      </form>

      {/* Display Contacts */}
      <ul className="list-group">
        {contacts.length === 0 ? (
          <li className="list-group-item">No contacts found. Add a contact!</li>
        ) : (
          contacts.map((contact, index) => (
            <li key={index} className="list-group-item">
              {contact.name} - {contact.email}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ContactManager;
