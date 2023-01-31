import css from "../Contact/Contact.module.css";
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';


export const Contact = ({ contact, onDelete }) => {
  return <>
     <li className={css.item} onClick={showDetail}>
      <div className={css.contact}>
        <p className={css.name}>{contact.name}</p>
        <p
          name={contact.name}
          className={classNames(css.number, css.visually_hidden)}>
          {contact.number}
        </p>
      </div>
      <button 
        type="button" 
        className={classNames(css.btn, css.visually_hidden)} 
        onClick={() => onDelete(contact.id)}
      >
        delete
      </button>
    </li>
  </>
}



const showDetail = (evt) => {
  // console.log(evt.currentTarget);
  const liRef = evt.currentTarget;
  const btnRef = liRef.childNodes[1];
  const contactRef = liRef.childNodes[0];
  const numberRef = contactRef.childNodes[1];

  numberRef.classList.toggle(`${css.visually_hidden}`)
  btnRef.classList.toggle(`${css.visually_hidden}`)
}

Contact.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
}