import React, { Component } from 'react';
import uniqid from 'uniqid';
import InputForm from './InputForm/InputForm';
import ContactList from './ContactsList/ContactsList';
import Section from './Section/Section';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts'))
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts?.length !== this.state.contacts.length)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  onInputChange = ev => {
    this.setState({ [ev.currentTarget.name]: ev.currentTarget.value });
  };

  onFormSubmit = data => {
    if (this.state.contacts.find(el => el.name === data.name)) {
      alert(`${data.name} is already in the list`);
      return;
    }
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

  onDeleteBtn = ev => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== ev.target.name),
    }));
  };

  filtered() {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter)
    );
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: 32,
          color: '#010101',
          marginLeft: 40,
        }}
      >
        <Section title="Phonebook" />
        <InputForm onSubmit={this.onFormSubmit} />
        <Section title="Contacts" />
        {this.state.contacts.length > 0 && (
          <Filter onInput={this.onInputChange} filter={this.state.filter} />
        )}
        <ContactList
          options={this.filtered()}
          filter={this.state.filter.toLowerCase()}
          onDeleteClick={this.onDeleteBtn}
        />
      </div>
    );
  }
}

export default App;
