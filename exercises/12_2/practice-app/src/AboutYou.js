import React from 'react';

class AboutYou extends React.Component{
  render() {
    const { value, handleEvent } = this.props;

    let error = undefined;
    if (value.length > 100) error = "Texto muito grande";

    return (
      <div>
          <legend>Conte-nos mais sobre você:</legend>
          <textarea name="aboutYou" 
          value={value} 
          onChange={handleEvent}>
          </textarea>
          <span>{error ? error : ''}</span>
      </div>
    )
  }
}

export default AboutYou;