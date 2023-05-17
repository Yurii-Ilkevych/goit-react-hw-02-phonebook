import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSumbit = data => {
    for (const contact of this.state.contacts) {
      if (data.name.includes(contact.name)) {
        alert(`${contact.name} "is already in contacts"`);
        return;
      }
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  handleSearch = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  getContact = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filterContact = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return filterContact;
  };
  
  render() {
    const { filter } = this.state;
    const contactsForRender = this.getContact();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onForm={this.handleSumbit} />

        <h2>Contacts</h2>
        <Filter onSearch={this.handleSearch} searchName={filter} />
        <ContactList contacts={contactsForRender} onDell={this.deleteContact} />
      </div>
    );
  }
}
