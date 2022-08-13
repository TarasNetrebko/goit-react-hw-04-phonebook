import React, { useState } from 'react';
import { Form, Label, Input, Button } from './PhonebookForm.styled';
import PropTypes from "prop-types"

export const PhonebookForm =({onSubmit}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        return;
      case "number":
        setNumber(value);
        return;
      default:
        console.log("Whoops!");
        return;
    }
  };
  const addContact = e => {
    e.preventDefault();
    onSubmit({name, number});
    
    setName("");
    setNumber("");
  };
    return (
      <Form action="" onSubmit={addContact}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
        <Label>
            Number
            <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
          </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }

PhonebookForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
  }