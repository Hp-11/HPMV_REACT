import React from 'react';
import {Link} from 'react-router-dom';

function main () {
  return (
   <div>
    <div>
      <Link to="/mapView">Map View</Link>
    </div>
    <div>
      <Link to="/listView">List View</Link>
    </div>
   </div>
  )
}

export default main;