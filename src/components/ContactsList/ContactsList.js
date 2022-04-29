import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

class ContactList extends Component {
  render() {
    return (
      <ul className={s.list}>
        {this.props.options
          .filter(el => el.name.toLowerCase().includes(this.props.filter))
          .map(({ id, name, number }) => (
            <li className={s.listItem} key={id}>
              {name}: {number}
              <button
                className={s.deleteBtn}
                onClick={this.props.onDeleteClick}
                name={id}
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

ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string,
  onDeleteClick: PropTypes.func.isRequired,
};
