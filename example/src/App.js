import 'typeface-roboto'
import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Demo from './Demo'
import Grid from '@material-ui/core/Grid'

const AppBody = styled(Grid)`
  padding: 20px;
  height: 100%;
`

const App = () => {
  return (
    <>
      <Header />
      <AppBody container>
        <Demo />
      </AppBody>
    </>
  )
}

export default App
