import React from 'react'
import {Provider} from 'react-redux'
import { store } from './redux/store'

function Theme() {
  return (
    <Provider store={store}>
      <Theme/>
    </Provider>
  )
}

export default Theme