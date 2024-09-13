import './App.css'
import FirstInfo from './components/FirstInfo'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer';
import Code from './components/Code';

import React, { useRef } from 'react';

function App() {
  return (
    <>
      <div className='background-1'></div>
      <Header></Header>
      <FirstInfo></FirstInfo>
      <VideoPlayer></VideoPlayer>
      <Code></Code>
    </>
  )
}

export default App
