import React, { Component } from 'react'

import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google-map'

class WeatherList extends Component {

  constructor (props) {
    super(props)
    this.renderWeather = this.renderWeather.bind(this)
  }

  renderWeather (cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp - 273.15)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    const {lon, lat} = cityData.city.coord
    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lng={lon} lat={lat} /></td>
        <td>
          <Chart width={160} height={80} color="orange" units="C" data={temps}/>
        </td>
        <td>
          <Chart width={160} height={80} color="green" units="hPa" data={pressures}/>
        </td>
        <td>
          <Chart width={160} height={80} color="black" units="%" data={humidities}/>
        </td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({weather}) {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList)