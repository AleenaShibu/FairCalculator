import React from 'react';

import './App.css';
import stationDetails from './stationDetails'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      stations:[],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
    componentDidMount() {
      const stationName = stationDetails.map(( stations) => 
        {return stations} )
    console.log(stationName)
    this.setState(
      { stations: stationName }
       
    )
    
  }
  
  render() {
    let stations = this.state.stations
    let optionsItems = stations.map((station) => <option key={station.stop_name}>{station.stop_name}</option>)
  

  
     return (
       <div>
         <h1> Fare calculator</h1>
         <form>
         <label>Starting Point:</label>
         <select>
                {optionsItems}
             </select>
             <br/>
             <label>Destination Point:</label>
             <select>
                {optionsItems}
             </select>

         </form>
       </div>      
            
     )
    }
  }

  
  
  export default App
