import React from 'react';

class LogOnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doerId: '',
      isValid: false,
    };
  }

  _onInput = event => {
    const doerId = event.target.value;
    const isValid = doerId.length !== 0;
    this.setState({
      doerId,
      isValid,
    });
  }

  _onSubmit = event => {
    event.preventDefault();
    this.props.logOn(this.state.doerId);
  }

  render() {
    return (
      <form name="logOn">
      </form>
    );
  }
}

export default LogOnForm;
