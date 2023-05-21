import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "store/operations";
import { selectError, selectIsLoading } from "store/selectors";
import { ContactForm } from "components/ContactForm";
import { Filter } from "components/Filter";
import { ContactList } from "components/ContactList";
import { Loader } from "components/Loader";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (  
    <div>
     <h1>Phonebook</h1>
     <ContactForm />
     <h2>Contacts</h2>
     <Filter/>
     {isLoading  && <Loader/>}
     {error && <h2>{error}</h2>}
     <ContactList/>
    </div>
);
};