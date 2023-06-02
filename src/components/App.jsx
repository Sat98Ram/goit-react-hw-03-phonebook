import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Section from './Sectiion/Section';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const { name, number } = data;

    const isExist = this.state.contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase() || el.number === number
    );
    if (isExist) {
      alert(`contact already exist`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  // checkContacts = () => {}

  searchFilter = ev => {
    this.setState({ filter: ev.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filteredContacts = ev => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.filteredContacts();
    // const { contacts, name } = this.state;
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Phonebook onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.state.filter} onChange={this.searchFilter} />
          <Contacts
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
