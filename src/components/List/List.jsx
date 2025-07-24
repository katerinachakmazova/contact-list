import { Component } from 'react';
import ListItem from '../ListItem/ListItem';

export class List extends Component {
  render() {
    return (
      <div>
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
