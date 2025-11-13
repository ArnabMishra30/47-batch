import React from 'react'
import { UserContext } from './Context.jsx';

function Provider() {
  const user = "Arnab Mishra";
  return (
    <UserContext.Provider>
      <Parent/>
    </UserContext.Provider>
  )
}

export default Provider