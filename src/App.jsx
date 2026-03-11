// import { useState } from 'react'
// import reactLogo from '/img/react.svg'
// import viteLogo from '/img/vite.svg'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Content } from "./features/layout/components/Content";
import { Footer } from './features/layout/components/Footer';
import { Header } from './features/layout/components/Header';
// Components Auth
import { Myaccount } from './features/auth/components/Myaccount';
import { Mybuys } from './features/auth/components/Mybuys';
import { Myfavorites } from './features/auth/components/Myfavorites';
// Components View
import { Articles } from './features/view/components/Articles';
import { Offers } from './features/view/components/Offers';
// import './App.jsx'

function App() {
  return (
      <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/mybuys" element={<Mybuys />} />
            <Route path="/myfavorites" element={<Myfavorites />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
