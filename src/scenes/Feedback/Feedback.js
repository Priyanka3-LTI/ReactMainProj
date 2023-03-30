import React, { Component } from 'react';
import axios from 'axios';
import './Feedback.scss';
import './Feedback.css';

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    // const body = {name : $("#name").val(), email : $("#email").val(), message: $("#message").val()};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    alert('Feedback Sent');
    event.preventDefault();
    const { name, email, message } = this.state;
    await axios.post(
      'https://sccezaka1m.execute-api.eu-west-1.amazonaws.com/test/feedback',
      {
        "name": `${name}`,
        "email": `${email}`,
        "message": `${message}`
    },
    {crossDomain: 'true'},
      {headers: {"Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "*"}}
    );
    //alert('Feedback Sent');
  }

  render() {
    return (
    <div>
      <h2 className='center title cyan-blue-text sdds-text-blue-900'>
        Feedback
      </h2>
      <h5 className='para center black-text'>
        We value your feedback, please fill the following details and help 
          us improve our customer experience
      </h5>
      <h6 className='font center black-text'>
        <h5><b>Drop Your Information Here!</b></h5>
      </h6>

      <div className='card'>
        <div className='card-content'>
          
          <form onSubmit={this.handleSubmit}>
            <h5>Name</h5>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <h5>Email</h5>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />

            <h5>Message</h5>
            <textarea
              type="text"
              name="message"
              onChange={this.handleChange}
              value={this.state.message}
            />

            <button type="submit" className='btn btn-header white-text text-darken-4 blue accent-3'>Send</button>
          </form>
        </div>
      </div>
    </div>
    );
  }
}