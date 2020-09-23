import React from 'react';

class AboutYou extends React.Component{
  render() {
    const { value, handleEvent, handleError } = this.props;

    let error = undefined;
    if (value.length > 100) error = "Texto muito grande";
    if (error) handleError(error);

    return (
      <div>
          <legend>Conte-nos mais sobre você:</legend>
          <textarea name="aboutYou" 
          value={value} 
          onChange={handleEvent}>
          </textarea>
          {/* <span>{error ? error : ''}</span> */}
      </div>
    )
  }
}

export default AboutYou;