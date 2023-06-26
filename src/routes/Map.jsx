import React from 'react'
import RouteBase from './RouteBase'
import { MapProvider } from "../components/context/MapContext"
import MapLayout from '../components/layout/MapLayout'

function Map() {
  return (
    <MapProvider>
      <RouteBase>
        <MapLayout></MapLayout>
      </RouteBase>
    </MapProvider>
  )
}

export default Map