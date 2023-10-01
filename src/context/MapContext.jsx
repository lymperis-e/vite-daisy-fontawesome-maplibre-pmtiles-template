import React, { createContext, useState, useMemo, useRef, useEffect } from 'react'

// Create a context to share data globally
const MapContext = createContext()

// Create a provider component that manages the shared data and filter state
function MapProvider (props) {
  const mapContainer = useRef(null)
  const [currentMap, setCurrentMap] = useState(null)
  const [styleLoaded, setStyleLoaded] = useState(false)

  // Create the context value object
  const contextValue = {
    mapContainer,
    currentMap,
    setCurrentMap,
    styleLoaded,
    setStyleLoaded
  }

  return (
        <MapContext.Provider value={contextValue}>
            {props.children}
        </MapContext.Provider>
  )
}

export { MapProvider, MapContext }
