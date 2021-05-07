import React from 'react';
import ColorPicker from './content/ColorPicker/ColorPicker';
import Counter from './content/Counter/Counter';
import Layout from './content/Layout/Layout';
import Profile from './content/Profile/Profile';
import user from './content/user.json'

const colorPickerOptions = [
  {label: "crimson",color: "#DC143C"},
  {label: "darkorange",color: "#FF8C00"},
  {label: "khaki",color: "#F0E68C"},
  {label: "lime",color: "#00FF00"},
  {label: "teal",color: "#008080"},
  {label: "navy",color: "#000080"},
  {label: "indigo",color: "#4B0082"},
]


const App = () => {

  return(
    <>
    <Layout >
      <Profile {...user}/>
      <ColorPicker colors = {colorPickerOptions}/>
      <Counter />
    </Layout>
    </>
  )
}

export default App;