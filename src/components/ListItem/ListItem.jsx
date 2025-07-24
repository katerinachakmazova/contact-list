import { Component } from 'react';
import './ListItem.css';
export class ListItem extends Component {
  render() {
    const { fName, lName } = this.props.contact;
    return (
      <div className='list-item'>
        <p onDoubleClick={() => this.props.transferContact(this.props.contact)}>
          {fName + ' ' + lName}
        </p>
        <span onClick={() => this.props.onDelete(this.props.contact.id)}>
          X
        </span>
      </div>
    );
  }
}

export default ListItem;
