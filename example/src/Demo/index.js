import React from 'react'
import styled from 'styled-components'
import { BulletedTextArea } from 'react-bulleted-textarea'
import Grid from '@material-ui/core/Grid'

const Heading = styled.p`
  font-family: Roboto;
  font-weight: 300;
  font-size: 20px;
  margin: 0;
  margin-bottom: 20px;
`

const Demo = () => {
  const values = ['a', 'b', 'c']

  return (
    <Grid item xs={12} md={6}>
      <Heading variant='body1'>Text Area</Heading>
      <BulletedTextArea
        onChange={(value) => console.log(value)}
        values={values}
      />
    </Grid>
  )
}

export default Demo
