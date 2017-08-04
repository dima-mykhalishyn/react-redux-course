import React, { Component } from 'react'

class GoogleMap extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    return new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    })
  }

  render() {
    return (
      <div ref="map"></div>
    )
  }

}

export default GoogleMap