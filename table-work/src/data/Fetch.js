import React from "react";

class Fetch extends React.Component{
    state = {
        loading: true,
        person: null
    };

   async componentDidMount(){
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
         this.setState({person: data.results[0] , loading: false});
         console.log(data.results[0]);
    }

    render() {
        return (
            <div>
                { this.state.loading || !this.state.person ? (
                 <div> loading... </div> 
                ) : ( 
                 <div>{ this.state.person.name }</div>
                 )}
            </div>
        );
    }
}
export default Fetch;