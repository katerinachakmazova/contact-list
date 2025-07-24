import { Component } from 'react'

export class Form extends Component {

  state = {
    ...this.props.currentContact
  }

  handleDelete = () => {
    this.props.onDelete(this.state.id);
    this.clearForm();
  }
  clearForm = () => {
    this.setState({
      fName: '',
      lName: '',
      email: '',
      phone: '',
      id: null
    })
  }
  onClear = (fieldName) => {
    this.setState({
      [fieldName]: '',
    })
  }
  onInputChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value,
    })
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSave({
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      phone: this.state.phone,
      id: this.state.id,
    });
    if(!this.state.id){
      this.clearForm();
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="inputs-container">
          <input type="text" placeholder='First Name' name='fName' onChange = {this.onInputChange} value={this.state.fName}/>
          <span onClick={() => this.onClear('fName')}>x</span>
          <input type="text" placeholder='Last Name' name = 'lName' onChange = {this.onInputChange} value={this.state.lName}/>
          <span onClick={() => this.onClear('lName')}>x</span>
          <input type="email" placeholder='Email' name = 'email' onChange = {this.onInputChange} value={this.state.email}/>
          <span onClick={() => this.onClear('email')}>x</span>
          <input type="tel" placeholder='phone' name = 'phone' onChange = {this.onInputChange} value={this.state.phone}/>
          <span onClick={() => this.onClear('phone')}>x</span>
        </div>
        <div className="button-container">
          <button>Save</button>
          {this.state.id ? <button onClick={this.handleDelete}>Delete</button> : ''}
        </div>
      </form>
    )
  }
}

export default Form
