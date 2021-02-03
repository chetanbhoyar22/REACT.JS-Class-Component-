import { Component} from "react";
class Class extends Component{
    
    state =
    {
        my_lang:"React.js",

    }
myFunction = () =>
{
   this.setState(
       {
           my_lang:"Java",
        
       }
   )
}

render(){
    return(
        <div>
        <h1 align='Center'>By Using ClassComponent -</h1>
            <h2>My Language is {this.state.my_lang}</h2>

        <button onClick={this.myFunction}>
            Click Here
        </button>
        </div>
        );
}
}
export default Class