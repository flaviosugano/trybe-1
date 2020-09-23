import React from 'react';

class Idade extends React.Component{
  render() {
    const { value, handleEvent } = this.props;
    return(
      <div>
         <legend>Qual a sua idade?</legend>
          <input type="number" name="age"
            onChange={handleEvent}
            value={value}>
          </input>
      </div>
    )
  }
}

export default Idade;