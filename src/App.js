import React from 'react';

import './App.css';
import fareDetails from './fareData'
import stationDetails from './stationDetails'
import 'react-bulma-components/dist/react-bulma-components.min.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      stations:[],
      fares:[],
      startingpoint:"ALVA",
      destinationpoint:"ALVA",
      fare: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
    componentDidMount() {
      const stationNames = stationDetails.map( stations => 
        {return stations} )
    this.setState(
      { stations: stationNames }
       
    )
    const fareList = fareDetails.map( fares => 
    {return fares} )

this.setState(
  { fares:fareList }
   
)
    
  }
  handleChange(event) {
    const { name,value } =event.target
    this.setState({ [name]: value })
    const fareAmount = fareDetails.map( fare_is => { 
      
      if (this.state.startingpoint === fare_is.originId && this.state.destinationpoint === fare_is.destId){
        
        let fareCalculated = fare_is.fare
        this.setState({fare:fareCalculated})
        
      }
    })

  }
    
  
  render() {
    let stationNames = this.state.stations
    let optionsItems = stationNames.map((List) => <option key={List.stop_name} value={List.stop_id}> {List.stop_name} {List.stop_id}</option>)
  

  
     return (

       <div  className="card" >
         
         <h1 align="center">Fare calculator</h1>
          <div className="section">
          <form>
         <label className= "label">Starting Point:</label>
         <div className= "select">
       
         <select value={this.state.startingpoint}
                  onChange={this.handleChange}
                  name="startingpoint"> 
                {optionsItems}
             </select>
             </div>
           
             <label className = "label">Destination Point:</label>
             <div className="select">
             <select value={this.state.destinationpoint}
                    onChange={this.handleChange}
                    name="destinationpoint">
                {optionsItems}
             </select>
             
             </div>
             
         </form>
         <div className="card">
         <div className="card-content">
        
              <p > <strong> Fare is:{this.state.fare}  ₹
                            </strong>
              </p>
              </div>
              </div>
              </div>
              
       </div>      
            
     )
    }
  }
  
  
  export default App
