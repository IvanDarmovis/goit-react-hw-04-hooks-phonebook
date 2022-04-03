import React, { Component } from 'react';
import InputForm from './InputForm/InputForm';
import ContactList from './ContactsList/ContactsList';
import Section from './Section/Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onFormSubmit = ev => {
    ev.preventDefault();
    console.log(ev.target[0].value);
    // this.setState(prevState => )
  };

  onInputChange = ev => {
    // console.log(ev.target.value);
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
        <Section title="Phonebook">
          <InputForm
            onSubmit={this.onFormSubmit}
            onInput={this.onInputChange}
          />
        </Section>
        <Section title="Contacts">
          <ContactList />
        </Section>
      </div>
    );
  }
}

export default App;
