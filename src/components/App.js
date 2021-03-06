import React, { Component } from 'react'
import './App.css'
import Caption from './Caption'
import Adjuster from './Adjuster'
import Canvas from './Canvas'
import ColorSelector from './ColorSelector'
import { TEXT_COLOR, FILL_COLOR } from '../reducers'
import Download from './Download'
import Help from './Help'
import { getMessage } from '../utils'

class App extends Component {
  componentDidMount() {
    document.title = getMessage('title')
  }
  render() {
    return (
      <div className="App">
        <h1>{getMessage('title')}</h1>
        <Canvas size={180} id="Touch180" />
        <Canvas size={64} id="Favicon64" />
        <Canvas size={32} id="Favicon32" />
        <Canvas size={24} id="Favicon24" />
        <Canvas size={16} id="Favicon16" />
        <Caption />
        <Download />
        <Adjuster />
        <ColorSelector target={TEXT_COLOR} />
        <ColorSelector target={FILL_COLOR} />
        <Help />
      </div>
    )
  }
}

export default App
