import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

    handleChange = event => {
      this.setState({
        message: event.target.value
      })
    }

  render() {
    return (
      <div>
        <div>
          <strong>Your message:</strong>
          <input type="text"
            value={this.state.message}
            onChange={this.handleChange}
            />
        </div>
        <p>{140 - this.state.message.length}</p>
        <div>

        </div>
      </div>
    );
  }
}

export default TwitterMessage;
