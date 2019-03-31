import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const Api_Key = "d88641e244ebfe3675074c6471e3e021";

class App extends Component {

  state ={
    temperature: undefined,
    city: undefined, 
    country: undefined, 
    humidity: undefined, 
    description: undefined, 
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault(); //passing event argument and preventing full page refresh when api is called on

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json(); //take in result of api call and convert to json
    console.log(response);

    if (city && country) {
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity, 
      description: response.weather[0].description,
      error: ""

    })
  }
  else {
    this.setState({
      error:"Please enter the values.."
    })
  }
}

  
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
              <div className="col-xs-5 title-container">
              <Titles />
              </div>
              <div className="col-xs-7 form-container">
              <Form loadWeather={this.getWeather}/>
              <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
              />
              </div>
              </div>
            </div>    
        </div>
        </div>
      </div>
    );
  }

}

export default App;
