import Contact from 'components/Contact/Contact';
import ContactForm from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  const contact = info => {
    dispatch(addContact(info));
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm contact={contact} />
      <Contact />
    </div>
  );
}
