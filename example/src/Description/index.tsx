import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { Heading, Body } from '../styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import { TableHead } from '@material-ui/core'
import TableRow from '@material-ui/core/TableRow'

const Code = styled.pre`
  padding: 10px;
  background-color: #272922;
  color: white;
  font-size: 15px;
  text-overflow: scroll;
`

const documentation = [
  {
    propName: 'onChange',
    isRequired: 'true',
    description:
      'Function that is called everytime the user writes something in the text area',
    type: '(values: string[]) => void',
    default: 'n/a'
  },
  {
    propName: 'values',
    isRequired: 'false',
    description: 'Initial values for the text area',
    type: 'string[]',
    default: '[ ]'
  },
  {
    propName: 'bulletChar',
    isRequired: 'false',
    description: 'Character used as bullet points',
    type: 'string',
    default: '-'
  }
]

const Description = () => {
  return (
    <Grid item xs={12} md={6}>
      <Heading>Getting Started</Heading>
      <Code>npm install react-bulleted-textarea</Code>
      <Heading>About</Heading>
      <Body>Author: Chris Rabe</Body>
      <Body>
        Just a simple textarea component with bullet points in each row.
      </Body>
      <Heading>Props</Heading>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Prop Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Required</TableCell>
              <TableCell>Default</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documentation.map((doc) => (
              <TableRow key={doc.propName}>
                <TableCell>{doc.propName}</TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.isRequired}</TableCell>
                <TableCell>{doc.default}</TableCell>
                <TableCell>{doc.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}

export default Description
