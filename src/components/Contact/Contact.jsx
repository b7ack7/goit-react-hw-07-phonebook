import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'store/operations';
import {ContactItem, ContactButton } from './Contact.styled';

export const Contact = ({id, name, phone}) => {
    const dispatch = useDispatch();
    return (
        <ContactItem>
            {name}: {phone}
            <ContactButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ContactButton>
        </ContactItem>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}