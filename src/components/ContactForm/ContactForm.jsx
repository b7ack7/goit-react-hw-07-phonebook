import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addContact } from 'store/operations';
import { selectContacts } from 'store/selectors';
import { FormWrapper, Label, Input, Button, Message } from "./ContactForm.styled";


const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const schema = yup.object().shape({
    name: yup.string().trim().matches(nameRegExp, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),
    phone: yup.string().trim().matches(phoneRegExp, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required(),
  }).required();


export const ContactForm = () =>  {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = ({name, phone}) => {
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (contacts.some(contact => contact.phone === phone)) {
      const findContact = contacts.find(contact => contact.phone === phone);
      alert(`${phone} is already in contacts as ${findContact.name}.`);
      return;
    }
    dispatch(addContact({name, phone})); 
    reset();
  };
    
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">Name</Label>
        <Input
            id="name"
            type="text"
            {...register('name')}
        />
          <Message>{errors.name?.message}</Message>
      <Label htmlFor="number">Number</Label>
        <Input
            id="phone"
            type="tel"
            {...register('phone')}
        />          
          <Message>{errors.phone?.message}</Message>
      <Button  type="submit">Add contact</Button>
    </FormWrapper>
      ) 

}

