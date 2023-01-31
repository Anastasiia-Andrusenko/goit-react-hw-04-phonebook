import { Component } from "react";
import css from "../ContactForm/ContactForm.module.css";
import classNames from "classnames";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

export class ContactForm extends Component {

  toggleForm = (evt) => {
    // console.log(evt.target);
    const btnRef = evt.target;
    const formRef = btnRef.nextSibling;
    // console.log(formRef);

    if (btnRef.textContent === "+") {
      btnRef.textContent = "x";
      formRef.classList.remove(`${css.visually_hidden}`)
    } else if (btnRef.textContent === "x") {
      btnRef.textContent = "+";
      formRef.classList.add(`${css.visually_hidden}`)
    }
  }


  addContact = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;
    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    }

    this.props.onAddContact(contact);
    name.value = "";
    number.value = "";
  }

  render() {
    return <div className={css.container}>
      <button type="button" className={css.btn} onClick={this.toggleForm}>+</button>
      <form
        className={classNames(css.visually_hidden, css.form)}
        onSubmit={this.addContact}> 
        <label className={css.label}>
          Name
          <input className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>
        <label className={css.label}>
          Number
          <input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button type="submit" className={classNames(css.btn, css.add)}>Add contact</button>
      </form>
      </div>
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}