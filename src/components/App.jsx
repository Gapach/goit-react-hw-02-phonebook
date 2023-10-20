import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import {Filter} from './Filter/Filter'
import {ContactList} from './ContactList/ContactList'


export  class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number
    }

    if (
      this.state.contacts.some(contact =>
        contact.name.toLowerCase().includes(name.toLocaleLowerCase()))
    ) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


 render() {
  const { filter } = this.state;
  const visibleContacts = this.getVisibleContacts();

  return(
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact}/>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
    </div>
  );
 };
};


