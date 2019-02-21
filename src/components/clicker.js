import React, { Component } from 'react';




class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showComponent: false,
      numToggles: 0
    }
    this.onButtonClick = this.onButtonClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.subToggle = this.subToggle.bind(this);
  }

  onButtonClick() {
    this.setState({
      showComponent: !this.state.showComponent
    })
  }

  handleToggle() {
    this.setState({
      numToggles: ++this.state.numToggles
    })
  }

  subToggle () {
    this.setState({
      numToggles: --this.state.numToggles
    })
  }
  render() {
    return(
      <div>
        
        

       

        {
            this.state.showComponent ? <Show /> : null
        }

        <hr/>

        <button onClick={this.handleToggle}>Add</button>
        <button onClick={this.subToggle}>Subtract</button>
        <p>
          I have been clicked {this.state.numToggles}
        </p>
      </div>
    )
  }
}

export default Clicker;