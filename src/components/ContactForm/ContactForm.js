import React, { Component } from 'react';
import { nanoid } from 'nanoid'
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };


  hundleSubmit = (evt) => {
evt.preventDefault()
const contact = {id: nanoid(), name: this.state.name, number: this.state.number}
this.props.onForm(contact)
this.resetValue()
  }

  handleValue = (evt) => {
    const {name, value} = evt.currentTarget
    this.setState({
    [name]: value
    })
  }

resetValue = () => {
  this.setState({
    name: '',
    number: '',
  })
}

  render() {
    const {name, number} = this.state
    return (
      <>
        <form onSubmit={this.hundleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleValue}
            />
          </label>
          <label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleValue}
            />
          </label>
          <button type='submit'>Add contact</button>
        </form>
      </>
    );
  }
}
export default ContactForm;
