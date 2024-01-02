import React from 'react'
import { Link } from 'react-router-dom'

const navigatorBar = () => {
  return (
    <div>
        <Link to="/mapView">Map View</Link>
        <Link to ="/listView">List View</Link>
    </div>
  )
}

navigatorBar.propTypes = {}

export default navigatorBar;