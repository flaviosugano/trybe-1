import React from 'react';

class SelectState extends React.Component{
  render() {
    const { value, handleEvent } = this.props;
    return (
      <div>
        <legend>Escolha sua nacionalidade</legend>
        <select name="selectState"
        value={value}
        onChange={handleEvent}>
          <option>Brasileiro</option>
          <option>Gringo</option>
        </select>
      </div>
    )
  }

}

export default SelectState;