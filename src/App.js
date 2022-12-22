import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import DetailPage from "./DetailPage"
import Layout from "./Layout"
import Home from "./Home"
import ReactPlayer from "./ReactPlayer"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/> } />
            <Route path="/play/:name/:id/:channel" element={<DetailPage />} />
            <Route path="/live" element={<ReactPlayer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
