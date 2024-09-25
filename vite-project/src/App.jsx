import './App.css'
import FirstInfo from './components/FirstInfo'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer';
import Code from './components/Code';
import Slider from './components/Slider'
import Uses from './components/Uses';
import Formates from './components/Formates';


function App() {
  return (
    <>
      <div className='background-1'></div>
      <Header></Header>
      <FirstInfo></FirstInfo>
      <VideoPlayer></VideoPlayer>
      <div className='block'>


      <Code></Code>
      <Slider></Slider>
      <div className='heading-app'>
          <p>Leverage AI throughout</p>
          <p>your company and products</p>
      </div>
      <Uses></Uses>
      </div>
      <Formates></Formates>
    </>
  )
}

export default App
