import React from 'react'
import MapComponent from '../components/map/MapComponent'

function MapLayout() {
  return (

    <div className="flex flex-col md:flex-row w-full h-full">
      <div className='h-full w-full'>

        <MapComponent></MapComponent>
        
      </div>
    </div>

  )
}

export default MapLayout