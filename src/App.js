import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './Features/Store'
import Comp1 from './Components/Comp1'
const App = () => {
  return (
    <Provider store={Store}>
    <div>
      App
      <Comp1 />
    </div>
    </Provider>
  );
}

export default App