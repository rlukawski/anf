/* eslint-disable */
import React, { useEffect } from "react";

import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";

export const ContactsContainer = (props) => {
  const serviceRef = React.useRef(null);
  const [contacts, setContacts] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  useEffect(() => {
    serviceRef.current = props.service;
    serviceRef.current.getContacts().then((contacts) => {
      setContacts(contacts);
    });
  }, []);

  const newContact = () => {
    setSelected({
      name: "",
      details: "",
    });
  };

  const onSelect = (contact) => {
    setSelected(contact);
  };

  const onSubmit = (contact) => {
    serviceRef.current.saveContact(contact).then(() => {
      serviceRef.current.getContacts().then((contacts) => {
        setContacts(contacts);
      });
    });
  };

  const onCancel = () => {
    this.setState({
      selected: null,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Contacts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ContactList
            contacts={contacts}
            selected={selected}
            onSelect={onSelect}
          />
        </div>
        <div className="col-md-4">
          {selected ? (
            <ContactForm
              contact={selected}
              onChange={onSelect}
              onSubmit={onSubmit}
              onCancel={onCancel}
            />
          ) : (
            <div>
              <button
                id="new-contact"
                onClick={newContact}
                className="btn btn-primary"
              >
                New contact
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
