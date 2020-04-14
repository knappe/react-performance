// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'
// 💣 remove this import
import Tilt from '../tilt'

// 🐨 use React.lazy to create a Tilt component which using a dynamic import
// to get the Tilt component from the '../tilt' module.

function App() {
  const [showTilt, setShowTilt] = React.useState(false)

  // 🐨 wrap the code below in a <React.Suspense /> component
  // with a fallback.
  // 💰 try putting it in a few different places and observe how that
  // impacts the user experience.
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showTilt}
          onChange={e => setShowTilt(e.target.checked)}
        />
        {' show tilt'}
      </label>
      {showTilt ? <Tilt>This is tilted!</Tilt> : null}
    </div>
  )
}
// 🦉 Note that if you're not on the isolated page, then you'll notice that this
// app actually already has a React.Suspense component higher up in the tree
// where this component is rendered, so you *could* just rely on that one.

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////
export default App
