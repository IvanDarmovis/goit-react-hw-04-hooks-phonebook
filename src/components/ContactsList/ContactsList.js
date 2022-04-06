import React, { Component } from 'react';

class ContactList extends Component {
  static defaultProps = {
    options: [],
  };

  state = {
    options: this.props.options,
  };
  render() {
    return (
      <ul>
        {this.state.options
          .filter(el => el.name.toLowerCase().includes(this.props.filter))
          .map(el => (
            <li key={el.id}>
              {el.name}: {el.number}
            </li>
          ))}
      </ul>
    );
  }
}

export default ContactList;
