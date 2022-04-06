import React, { Component } from 'react';
import uniqid from 'uniqid';
import InputForm from './InputForm/InputForm';
import ContactList from './ContactsList/ContactsList';
import Section from './Section/Section';
import Filter from './ContactsList/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onInputChange = ev => {
    this.setState({ [ev.currentTarget.name]: ev.currentTarget.value });
  };

  onFormSubmit = data => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: uniqid(),
          ...data,
        },
      ],
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#010101',
        }}
      >
        <Section title="Phonebook" />
        <InputForm onSubmit={this.onFormSubmit} />
        <Section title="Contacts" />
        <Filter onInput={this.onInputChange} filter={this.filter} />
        <ContactList
          options={this.state.contacts}
          filter={this.state.filter.toLowerCase()}
        />
      </div>
    );
  }
}

export default App;
