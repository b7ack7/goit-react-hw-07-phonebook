import {  useSelector } from "react-redux";
import { Contact } from 'components/Contact';
import { ContactListWrapper } from './ContactList.styled';
import { selectVisibleContacts } from "store/selectors";

export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);

    return (
        <ContactListWrapper >{
            contacts.map(contact => {
                return (<Contact key={contact.id} 
               {...contact}/>)
            })
        }
        </ContactListWrapper>
  
    )
}



