
import { useState, useEffect } from "react";
import '../../src/index.css';
import { ContactList } from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";


const App = () => {
  const [contacts, setContacts] = useState(() => {
      const savedContacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(savedContacts);
      return parsedContacts ? parsedContacts : [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
    }
    );
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const onAddContact = (obj) => {
    const equalName = contacts.find(
      element => element.name.toLowerCase() === obj.name.toLowerCase());

    if (equalName) return alert(`${equalName.name} is already in contacts.`);

    setContacts(prevContacts => ([...prevContacts, obj]))
  }

  const deleteContact = (id) => {
    setContacts(prevContacts => (prevContacts.filter(contact => contact.id !== id)));
  }

  const onFilterInput = (value) => { setFilter(value) }
  
  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedValue = filter.toLowerCase();
    const filteredContactsArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue));
    return filteredContactsArray;
  }

  const filteredContacts = filterContacts();


   return <div className="container">
    <div className="in_container">
      <div>
        <h2 className="title">Phonebook</h2>
        <Filter onFilterInput={onFilterInput} filter={filter} />
        <ContactForm onAddContact={onAddContact}/>
      </div>
      <div>
        <h2 className="title">Contacts</h2>
          <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      </div>
    </div>
    <div className="circle"></div>
   </div>
}

export default App;

