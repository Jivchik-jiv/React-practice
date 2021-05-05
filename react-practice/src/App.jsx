import React from 'react';
import Profile from './content/Profile';
import user from './content/user.json'


const App = () => {

  return(
    <div>
      <Profile {...user}/>
    </div>
  )
}

export default App