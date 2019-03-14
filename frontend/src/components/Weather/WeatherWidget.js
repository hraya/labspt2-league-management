import React, { Component } from 'react';
import axios from 'axios';

class WeatherWidget extends Component {
  state = {
    temp: 0,
    condition: 'rain',
    city: null,
    state: null,
    loading: true
  };

  componentDidMount() {
    const coordinates = {
      latitude: 43.25,
      longitude: 92.09
    };

    axios.get('http://localhost:4000/weather').then(res => {
      const { temperature, icon } = res.data.weatherData.currently;
      //   console.log(res.data);
      this.setState({
        temp: Math.floor(temperature),
        condition: icon,
        city: res.data.city,
        state: res.data.state,
        loading: false
      });
    });
  }

  render() {
    const widget = {
      display: 'inline-block',
      border: '1px solid black',
      padding: '10px',
      color: 'white',
      backgroundColor: 'steelblue',
      marginTop: '0px'
    };
    if (this.state.loading) {
      return <h3 style={widget}>Loading...</h3>;
    }
    return (
      <div>
        <h2 style={{ marginBottom: '5px' }}>
          {this.state.city}, {this.state.state}
        </h2>
        <h3 style={widget}>
          {this.state.temp}˚F {this.state.condition}
        </h3>
      </div>
    );
  }
}

export default WeatherWidget;
