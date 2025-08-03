import ListItem from '../ListItem/ListItem';
import PropTypes from 'prop-types';
import './List.css';
function List({ contacts, onDelete, transferContact }) {
  return (
    <div className='list-container'>
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <ListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          transferContact={transferContact}
        />
      ))}
    </div>
  );
}
List.propTypes = {
  contacts: PropTypes.array,

}

List.defaultProps = {
  contacts: []
}
export default List;
