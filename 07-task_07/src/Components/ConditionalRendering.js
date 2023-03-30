import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {greeting:true}
    }
    render() {
        let { greeting } = this.state;
    
    return (
        <div>
        <h1>Say Hello!!
        </h1>
        {(function() {
          if (greeting) {
            return <button>Hey!!</button>;
          } else {
            return <button>Welcome</button>;
          }
        })()}
      </div>
    );
  }
}


export default ConditionalRendering


