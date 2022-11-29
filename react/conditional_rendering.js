// Conditional rendering like a pro.
import { Component } from "react"

class Home extends Component (){
    state = {
        show:false
    }
    clickHandler = () =>{
        this.setState({show: !this.state.show})
    }
    render(){
        // direct js
        
        return (
        <div>
            <a href="#">click me</a>
            {this.state.show && <p>conditionally rendered base on show</p>}
        </div>
        )
        
    }
}

export default Home