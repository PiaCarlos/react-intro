import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavBar} from './components/NavBar.jsx'
import {MainComponent} from './components/MainComponent.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <MainComponent />
    </>
  )
}


