import { Routes, Route } from 'react-router-dom'
import NavBar from './components/nav-bar/Navbar'
import Footer from './components/footer/Footer'


import { Home, Architect, Tribute } from './importer/MainPages'
import { Unfoldings, Vessels, Existence, Codex} from './importer/InnerPages'



// Vessels Outlets
import Heroes from './pages/inner-page/vessels/char-section/HeroesViewer'



// Existence Outlets
import MapPage from './pages/map-page/MapPage'



// Unfoldings Outlets
import Saga from './pages/inner-page/unfoldings/Saga/Saga'


function App() {
  return (
    <>
      <NavBar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architect" element={<Architect />} />
          <Route path="/tribute" element={<Tribute />} />



          <Route path="/unfoldings" element={<Unfoldings />}>
            <Route index element={<Saga />}/>
          </Route> 


          <Route path="/vessels" element={<Vessels />}>
            <Route index element={<Heroes />}/>
          </Route>   


          <Route path="/existence" element={<Existence />}>
            <Route index element={<MapPage />}/>
          </Route>

          <Route path="/codex" element={<Codex />}>
          
          </Route>
        </Routes>

      </main>

      <Footer />
    </>
  )
}

export default App
