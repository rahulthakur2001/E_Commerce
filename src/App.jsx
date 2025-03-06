import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header/Header'
import { Homelayout } from './Layouts/Homelayout'
import { Viewlayout } from './Layouts/Viewlayout'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route element={<Homelayout />}>
            <Route path="/o" element={<div>Home Page</div>} />
          </Route>
          <Route path="/ok" element={<Viewlayout />}>
            <Route path="view" element={<div>View Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
