import ContactForm from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Wrapper } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { getFilter, getFilteredContacts } from "redux/selectors";
import { removeContacts } from "redux/contacts/contacts-operations";

export default function App() {
const contacts = useSelector(getFilteredContacts);
const filter = useSelector(getFilter);

const dispatch = useDispatch();

const deleteContact =(payload) => {
    dispatch(removeContacts(payload));
  } 

  return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter filter={filter}/>
        <ContactList contacts={contacts} onDeleteContact={deleteContact}/>
      </Wrapper>
    )
}
