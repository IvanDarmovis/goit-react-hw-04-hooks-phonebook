import React, { Component } from 'react';

class ContactList extends Component {
  static defaultProps = {
    options: [],
    filter: '',
  };

  state = {
    options: this.props.options,
    filter: this.props.filter,
  };
  // }
  render() {
    const { options, filter } = this.state;
    return (
      // <div>
      //   {/* <label>
      //   Find contacts by name
      //   <input onChange={onInput} type="text" name="filter" />
      // </label> */}
      <ul>
        {options
          .filter(el => el.name.toLowerCase().includes(filter))
          .map(el => (
            <li key={el.id}>
              {el.name}: {el.number}
            </li>
          ))}
      </ul>
      // </div>
    );
  }
}

// function ContactList({ options, onInput, filter, children }) {
//   return (
//     <div>
//       {children}
//       {/* <label>
//         Find contacts by name
//         <input onChange={onInput} type="text" name="filter" />
//       </label> */}
//       <ul>
//         {options
//           .filter(el => el.name.toLowerCase().includes(filter))
//           .map(el => (
//             <li key={el.id}>
//               {el.name}: {el.number}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

export default ContactList;
