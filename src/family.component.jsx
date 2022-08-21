import { Component } from "react"

class Family extends Component{
constructor(props){
super()
this.state={lName:"Balacho"}
}
componentWillMount(){
    alert("Welcome")
}
getLastName(e){
    this.setState({ lName: e.target.value })
}
render(){
    return (
    <div>
        <h1> Hello</h1>
        <input value={this.state.lName} onChange={(e) => this.getLastName(e)} type="text" name="" id="" />
        <h1> {this.state.lName}</h1>
    </div>
    )
}
componentDidMount(){
    console.log("Hello")
}
componentWillUpdate(){
    alert("another change ??")
}
componentDidUpdate(){
    console.log("yes you didddd");
}

}

export default Family