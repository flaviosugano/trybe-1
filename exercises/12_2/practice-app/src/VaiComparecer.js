import React from 'react';

class VaiComparecer extends React.Component{
  render() {
    const { value, handleEvent } = this.props;
    return (
      <div>
        <legend>Você tem disponibilidade?</legend>
        <input name="vaiComparecer"
        onChange={handleEvent}
        value={value}
        type="checkbox">
        </input>
      </div>
    )
  }
}

export default VaiComparecer;