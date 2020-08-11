import React from 'react'
import { BulletedTextArea } from 'react-bulleted-textarea'

const App = () => {
  const values = ['a', 'b', 'c']

  return (
    <div style={{ padding: 20 }}>
      <BulletedTextArea
        onChange={(values) => console.log(values)}
        values={values}
      />
    </div>
  )
}

export default App
