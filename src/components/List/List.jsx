import ListItem from '../ListItem/ListItem';
import './List.css';
function List({ contacts = [], onDelete, transferContact }) {
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

export default List;
