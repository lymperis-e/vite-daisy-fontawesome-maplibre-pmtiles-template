import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { PageLayout } from '@/layout/PageLayout'

import { AuthProvider } from './context/AuthContext'
import { MapProvider } from './context/MapContext'
import { DataProvider } from './context/DataContext'

import Home from '@/routes/Home'
import Map from '@/routes/Map'

function App () {
  return (
    <>
      <AuthProvider>
        <DataProvider>
        <MapProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="/map" element={<Map />} />
              </Route>
            </Routes>
          </HashRouter>
        </MapProvider>
        </DataProvider>
      </AuthProvider>
    </>
  )
}

export default App
