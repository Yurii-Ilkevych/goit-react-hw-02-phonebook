import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, onDell} = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button type="button" onClick={() => {onDell(contact.id)}}>Delete</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
