import { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';
export class List extends Component {
  render() {
    return (
      <div className='list-container'>
        <h2>Contact List</h2>
        {this.props.contacts.map((contact) => (
          <ListItem
            key={contact.id}
            contact={contact}
            onDelete={this.props.onDelete}
            transferContact={this.props.transferContact}
          />
        ))}
      </div>
    );
  }
}

export default List;
