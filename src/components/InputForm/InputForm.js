import React, { Component } from 'react';

class InputForm extends Component {
  // static defaultProps = {
  //   name: '',
  //   number: '',
  // };

  state = {
    name: '',
    number: '',
  };

  onInputChange = ev => {
    this.setState({ [ev.currentTarget.name]: ev.currentTarget.value });
    console.log(ev.currentTarget.name);
    console.log(ev.currentTarget.value);
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Name
          <input
            onChange={this.onInputChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.onInputChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// function InputForm({ onSubmit, onInput, name, number }) {
//   return (
//     <form onSubmit={onSubmit}>
//       <label>
//         Name
//         <input
//           onChange={onInput}
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label>
//         Number
//         <input
//           onChange={onInput}
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// }

export default InputForm;
