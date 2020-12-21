import { render } from "@testing-library/react";
import React, {component} from "react";

 export default class FetchAPI extends component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isloaded: false,
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typecode.com/users")
         .then(res => res.json())
         .then(json => {
             this.setState({
                 isloaded: true,
                 items: json,
             })
         });
    }

  render(){
      if(!isloaded){
          return <div>loading...</div>
      }

      else{
        
        return(
          
          <div className="fetchapi">
             <ul>
                {items.map(this.state.item => (
                    <li key={item.id}>
                      {this.state.item.name} || Email: {this.state.item.email}
                    </li>
                ))};
             </ul>
          </div>
          );
      }
    }
}