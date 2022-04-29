import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './InputForm.module.css';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  onInputChange = ev => {
    this.setState({ [ev.currentTarget.name]: ev.currentTarget.value });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.labelInput}
            onChange={this.onInputChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.labelInput}
            onChange={this.onInputChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default InputForm;

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
