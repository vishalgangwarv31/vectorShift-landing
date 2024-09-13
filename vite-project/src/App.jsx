import './App.css'
import FirstInfo from './components/FirstInfo'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer';

import React, { useRef } from 'react';

function App() {
  return (
    <>
      <div className='background-1'></div>
      <Header></Header>
      <FirstInfo></FirstInfo>
      <VideoPlayer></VideoPlayer>
    </>
  )
}

export default App
