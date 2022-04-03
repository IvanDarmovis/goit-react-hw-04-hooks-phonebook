import React from 'react';

function InputForm({ onSubmit, onInput }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          onChange={onInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default InputForm;
