import React from 'react';
import Layout from './content/Layout/Layout';
import Profile from './content/Profile/Profile';
import user from './content/user.json'


const App = () => {

  return(
    <>
    <Layout >
      <Profile {...user}/>
    </Layout>
    </>
  )
}

export default App;