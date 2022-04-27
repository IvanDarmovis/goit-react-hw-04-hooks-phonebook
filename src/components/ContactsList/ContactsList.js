import React, { Component } from 'react';
import s from './ContactsList.module.css';

class ContactList extends Component {
  render() {
    return (
      <ul className={s.list}>
        {this.props.options
          .filter(el => el.name.toLowerCase().includes(this.props.filter))
          .map(el => (
            <li className={s.listItem} key={el.id}>
              {el.name}: {el.number}
              <button
                className={s.deleteBtn}
                onClick={this.props.onDeleteClick}
                name={el.id}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}

export default ContactList;
