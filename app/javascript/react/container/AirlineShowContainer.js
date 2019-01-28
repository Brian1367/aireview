import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import AirlineShowTile  from '../components/AirlineShowTile'

class AirlineShowContainer extends Component {
 constructor(props) {
   super(props);
   this.state= {
     airline: "",
     destinations: "",
     rating: ""

   }
 }
 componentDidMount(){

 let id = this.props.params.id
 console.log(id)

 fetch(`/api/v1/airlines/${id}`)
 .then(response => {
   let responseBody = response.json()
   return responseBody
 }).then(responseBody => {

   this.setState({
     airline: responseBody.name,
     destinations: responseBody.destinations,
     rating: responseBody.overall_rating
   })
 })
}

 render(){
   return (
     <div>
     <AirlineShowTile
     key={this.props.params.id}
     airline={this.state.airline}
     destinations={this.state.destinations}
     rating={this.state.rating}
     />
     </div>
   )
 }
}

export default AirlineShowContainer;
