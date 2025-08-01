import './ListItem.css';
function ListItem({ contact, transferContact, onDelete }) {
  const { fName, lName, id } = contact;
  return (
    <div className='list-item'>
      <p onDoubleClick={() => transferContact(contact)}>
        {fName + ' ' + lName}
      </p>
      <span onClick={() => onDelete(id)}>X</span>
    </div>
  );
}

export default ListItem;
