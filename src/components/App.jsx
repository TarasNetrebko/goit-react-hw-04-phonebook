import React, { useState, useEffect } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { PhonebookList } from './PhonebookList/PhonebookList';
import { ContentContainer } from './App.styled';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])
  const [isFirstMount, setIsFirstMount] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (isFirstMount) {
      localStorage.getItem('contacts') === null
      ? localStorage.setItem('contacts', JSON.stringify(contacts))
        : setContacts(JSON.parse(localStorage.getItem('contacts')))
      setIsFirstMount(false);
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
    
  }, [contacts])
  
  const formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    let isExisted = false;
    contacts.map(contact => {
      contact.name === name && (isExisted = true);
      return contact;
    });
    isExisted
      ? alert(`${name} is already is contacts`)
      : setContacts([newContact, ...contacts])
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const deleteContact = id => {
    const AfterDelete = contacts.filter(
      contact => contact.id !== id
    );
    setContacts([...AfterDelete]);
  };

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <ContentContainer>
          <h1>Phonebook</h1>
          <PhonebookForm onSubmit={formSubmitHandler} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <PhonebookList
            contacts={filteredContacts}
            onDelete={deleteContact}
          />
        </ContentContainer>
      </div>
    );
  }

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     localStorage.getItem('contacts') === null
//       ? localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//       : this.setState({
//           contacts: JSON.parse(localStorage.getItem('contacts')),
//         });
//   }
//   componentDidUpdate(prevProps, prevState) {
//     const prevContacts = prevState.contacts;
//     const { contacts } = this.state;
//     if (prevContacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts))
//     }
//   }
//   formSubmitHandler = ({ name, number }) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     let isExisted = false;
//     this.state.contacts.map(contact => {
//       contact.name === name && (isExisted = true);
//       return contact;
//     });
//     isExisted
//       ? alert(`${name} is already is contacts`)
//       : this.setState(({ contacts }) => ({
//           contacts: [newContact, ...contacts],
//         }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };
//   deleteContact = id => {
//     const AfterDelete = this.state.contacts.filter(
//       contact => contact.id !== id
//     );
//     this.setState(({ contacts }) => ({
//       contacts: [...AfterDelete],
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     const normalizedFilter = filter.toLowerCase();
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 24,
//           color: '#010101',
//         }}
//       >
//         <ContentContainer>
//           <h1>Phonebook</h1>
//           <PhonebookForm onSubmit={this.formSubmitHandler} />
//           <h2>Contacts</h2>
//           <Filter value={filter} onChange={this.changeFilter} />
//           <PhonebookList
//             contacts={filteredContacts}
//             onDelete={this.deleteContact}
//           />
//         </ContentContainer>
//       </div>
//     );
//   }
// }
