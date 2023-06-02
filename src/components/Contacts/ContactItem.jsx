import css from './Contacts.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ deleteContact, id, number, name }) => {
  return (
    <li key={id} className={css.contactItem}>
      {name}: {number}
      <button onClick={() => deleteContact(id)} className={css.btnDelete}>
        delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
