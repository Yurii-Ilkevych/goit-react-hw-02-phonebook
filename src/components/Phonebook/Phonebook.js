import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  static = {
    constacts: [],
    filter: '',
  };

  static propTypes = {
    constacts: PropTypes.array,
    filter: PropTypes.string.isRequired,
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
  };


hundleSaveContact = (evt) => {
evt.preventDefault()
const id = nanoid();
const {name, number} = evt.target.elements
const contact = {id: id, name: name.value, number: number.value}
console.log(contact)
}

hundleWriteFilterForSearch = (evt) => {
this.setState({
    filter: evt.target.value
})
this.hundleSearch()
}

hundleSearch = (name) => {

}

deleteContact = contactId => {
this.setState(prevState => ({
contacts: prevState.contacts.filter(contact => contact.id !== contactId)
}))
}

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
      <h2>Phonebook</h2>
        <form onSubmit={this.hundleSaveContact}>
          <label>Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          /></label>
          <label>Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          /></label>
          <button type="sumbmit">Add contact</button>
          </form>
        <div>
            <div>
                <h2>Contacts</h2>
                <p>Find contacts by name</p>
                <input type="text" value={filter} onChange={this.hundleWriteFilterForSearch}></input>
          <ul>
            {contacts.map(data => {
              return (
                  <li key={data.id}>{data.name}: {data.number}
                  <button type='button' onClick={() => {this.deleteContact(data.id) }}>Delete</button> 
                  </li>
              );
            })}
          </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Phonebook;
