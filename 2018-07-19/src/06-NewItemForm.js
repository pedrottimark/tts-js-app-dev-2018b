import React from 'react';

import {getMessageForText} from './06-logic';

class NewItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      messageInvalid: '',
      text: '',
    };
  }

  _onInput = event => {
    const text = event.target.value;
    const messageInvalid = getMessageForText(text);
    const isValid = text.length !== 0 && messageInvalid.length === 0;
    this.setState({
      isValid,
      messageInvalid,
      text,
    });
  }

  _onSubmit = event => {
    event.preventDefault();
  }

  render() {
    const {isValid, messageInvalid, text} = this.state;
    return (
      <form name="newItem" onSubmit={this._onSubmit}>
        <label>New uncompleted item: <input type="text" name="textOfItem" disabled={isWaiting} value={text} onInput={this._onInput}/></label>
        <button type="submit" disabled={!isValid}>Add</button>
        <span>{messageInvalid}</span>
      </form>
    );
  }
}

export default NewItemForm;
