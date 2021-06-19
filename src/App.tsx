import React from 'react';
import { InputOriginalObject } from './components/InputOriginalObject'
import { RenderOriginalObject } from './components/RenderOriginalObject'
import { InputManipulateObject } from './components/InputManipulateObject'
import { RenderManipulateObject } from './components/RenderManipulateObject'
import { RenderResultObject } from './components/RenderResultObject'

import './App.css';

function App() {
  return (
    <div className="App">
      <InputOriginalObject />
      <InputManipulateObject />
      <RenderOriginalObject />
      <RenderManipulateObject />
      <RenderResultObject />
    </div>
  );
}

export default App;
