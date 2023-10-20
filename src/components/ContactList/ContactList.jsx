import PropTypes from 'prop-types';
import css from './ContactList.module.css'
import React, {Component} from 'react';

export class ContactList extends Component {
    render() {
      const { contacts, onDeleteContact } = this.props;
  
      return (
        <ul className="list">
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button className={css.btn} onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      );
    }
  }

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };
