import React from 'react';

class FavoriteState extends React.Component{
  // constructor(props) {
  //   super(props);
  //   if(value.length > 40) {
  //     handleError(true)
  //   }
  // }
  render() {
    const { handleEvent, value, handleError } = this.props;

    if(value.length > 40) {
      handleError(true)
    }

    return (
      <div>
        <legend>Digite o seu estado favorito</legend>
        <input name="favoriteState" onChange={handleEvent} value={value} ></input>
      </div>
    )
  }
}

export default FavoriteState;