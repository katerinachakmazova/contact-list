import { Component } from 'react';
import './Form.css';
export class Form extends Component {
  state = {
    ...this.props.currentContact,
  };

  handleDelete = () => {
    this.props.onDelete(this.state.id);
    this.clearForm();
  };
  clearForm = () => {
    this.setState({
      fName: '',
      lName: '',
      email: '',
      phone: '',
      id: null,
    });
  };
  onClear = (event) => {
    const input = event.target.previousSibling;
    this.setState({
      [input.name]: '',
    });
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSave({
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      phone: this.state.phone,
      id: this.state.id,
    });
    if (!this.state.id) {
      this.clearForm();
    }
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='block-container'>
        <div className='inputs-container'>
          <div className='input-item-container'>
            <input
              type='text'
              placeholder='First Name'
              name='fName'
              onChange={this.onInputChange}
              value={this.state.fName}
            />
            <span onClick={this.onClear}>X</span>
          </div>
          <div className='input-item-container'>
            <input
              type='text'
              placeholder='Last Name'
              name='lName'
              onChange={this.onInputChange}
              value={this.state.lName}
            />
            <span onClick={this.onClear}>X</span>
          </div>
          <div className='input-item-container'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={this.onInputChange}
              value={this.state.email}
            />
            <span onClick={this.onClear}>X</span>
          </div>
          <div className='input-item-container'>
            <input
              type='tel'
              placeholder='phone'
              name='phone'
              onChange={this.onInputChange}
              value={this.state.phone}
            />
            <span onClick={this.onClear}>X</span>
          </div>
        </div>
        <div className='button-container'>
          <button id='save'>Save</button>
          {this.state.id ? (
            <button onClick={this.handleDelete} id='delete'>
              Delete
            </button>
          ) : (
            ''
          )}
        </div>
      </form>
    );
  }
}

export default Form;
