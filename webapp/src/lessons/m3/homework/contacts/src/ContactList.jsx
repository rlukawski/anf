/* eslint-disable */
import React from 'react';


export const ContactList = ({selected, contacts, onSelect}) => {
  return (
    <div className="list-group">
      {contacts.map((contact) => (
        <button
          key={contact.id}
          onClick={(e) => onSelect(contact)}
          className={`list-group-item ${this.props.selected && (this.props.selected.id === contact.id) ? 'active' : ''}`}
        >
          {contact.name}
        </button>
      ))}
    </div>
  );

}
