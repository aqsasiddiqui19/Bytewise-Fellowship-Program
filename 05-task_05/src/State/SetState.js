import React, {Component} from 'react'

class SetState extends Component {
constructor(){
    super()
    this.state = {
        message:'Welcome to World'
    }
}

changeMessage(){
    this.setState({message:'Thankyou for Pressing'

    })
}
    render(){
     
return( 
<div> 
    <h1>{this.state.message}</h1>
    <button onClick={() => this.changeMessage()}>Press This</button>
    </div>
)
}
}

export default SetState