import css from './ContactList.module.css'
import Contact from "../Contact/Contact"
import { useSelector } from 'react-redux'
import { selectVisibleContacts } from '../../selectors/selectors'

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts)

  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList