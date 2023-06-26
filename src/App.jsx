import { HashRouter, Routes, Route } from "react-router-dom"
import NavbarComponent from "./components/nav/NavbarComponent"

import Home from './routes/Home'
import Map from "./routes/Map"

function App() {

  return (

    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<NavbarComponent />}>

            <Route index element={<Home />} />
            <Route path="/map" element={<Map />} />
            
            {/*<Route  path="/contact" element={<Contact />} />*/}

          </Route>
        </Routes>
      </HashRouter>
      {/*<FooterComponent/>*/}
    </>

  )
}

export default App
