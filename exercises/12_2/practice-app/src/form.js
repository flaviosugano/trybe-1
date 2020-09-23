import React from 'react';
import FavoriteState from './FavoriteState';
import SelectState from './SelectState';
import Idade from './Idade'
import AboutYou from './AboutYou';
import VaiComparecer from './VaiComparecer';

class Form extends React.Component{
  constructor () {
    super();

    this.handleEvent = this.handleEvent.bind(this)
    this.handleError = this.handleError.bind(this)
    this.fileInput = React.createRef();

    this.state = {
      favoriteState: '',
      selectState: '',
      age: 0,
      aboutYou: '',
      vaiComparecer: false,
      formularioComErros: false
    }
  }
  
  handleError(erro) {
    this.setState({
      formularioComErros: erro
    })
  }

  handleEvent({ target }) {
    let { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form>
          <fieldset>
            <legend>Inscrição!</legend>
            <SelectState value={this.state.selectState} handleEvent={this.handleEvent} />
            <FavoriteState handleError={this.handleError} value={this.state.favoriteState} handleEvent={this.handleEvent} />
            <Idade value={this.state.age} handleEvent={this.handleEvent} />
            <AboutYou value={this.state.aboutYou} handleEvent={this.handleEvent} />
            <VaiComparecer value={this.state.vaiComparecer} handleEvent={this.handleEvent} />
            <legend>Envie-nos sua apresentação</legend>
            <input type="file" ref={this.fileInput}></input>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;