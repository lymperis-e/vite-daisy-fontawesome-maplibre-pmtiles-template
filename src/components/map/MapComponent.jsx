import React, { useRef, useEffect, useState, useContext } from 'react'
import maplibregl from 'maplibre-gl/dist/maplibre-gl.js'
import * as pmtiles from 'pmtiles'
import { mapStyle } from './config/style'
import '../../../node_modules/maplibre-gl/dist/maplibre-gl.css'

import { MapContext } from '@/context/MapContext'

const protocol = new pmtiles.Protocol()
maplibregl.addProtocol('pmtiles', protocol.tile)

function MapComponent ({ children, ...rest }) {
  const {
    mapContainer,
    currentMap,
    setCurrentMap,
    styleLoaded,
    setStyleLoaded
  } = useContext(MapContext)

  const [map, setMap] = useState(null)
  const [center, setCenter] = useState({ lng: 23.790886503543334, lat: 38.017083696843684 })
  const [zoom, setZoom] = useState(12.2)
  const bounds = [
    [35.42858453149606, 47.36576174390416], // southwest coordinates
    [12.74010215614743, 28.06435825149157] // northeast coordinates
  ]

  // Initialize Map
  useEffect(() => {
    if (map || currentMap) return
    const mapInstance = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyle, // mStyle,
      center: [23.81, 38.33],
      zoom: 6,
      // maxBounds: bounds,
      // preserveDrawingBuffer: true,
      maxPitch: 50,
      hash: false,
      preferWebGL: true,
      attributionControl: false,
      ScaleControl: false,
      navigationControl: false
    })

    mapInstance.addControl(new maplibregl.ScaleControl({
      maxWidth: 100,
      unit: 'metric'
    }), 'bottom-left')

    mapInstance.addControl(new maplibregl.AttributionControl({
      compact: true
    }), 'bottom-right')

    mapInstance.addControl(new maplibregl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    }), 'top-right')

    mapInstance.on('idle', () => {
      setStyleLoaded(true)
    })

    window.map = mapInstance
    setMap(mapInstance)
    setCurrentMap(mapInstance)
  }, [map, center, zoom])

  return (
        <>

            {!styleLoaded &&
                <div className='relative'>
                    <div className='absolute top-0 right-0 w-full h-screen flex flex-col items-center content-center'>
                        Loading . . .
                    </div>
                </div>
            }

            <div ref={mapContainer} className='h-full w-full' {...rest}>
                {children}
            </div>
        </>
  )
}

export default MapComponent
