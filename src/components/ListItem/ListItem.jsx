import { Component } from 'react';

export class ListItem extends Component {
  render() {
    const { fName, lName } = this.props.contact;
    return (
      <div>
        <p onDoubleClick={() => this.props.transferContact(this.props.contact)}>
          {fName + ' ' + lName}
        </p>
        <span onClick={() => this.props.onDelete(this.props.contact.id)}>
          x
        </span>
      </div>
    );
  }
}

export default ListItem;
