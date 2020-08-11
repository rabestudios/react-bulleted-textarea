import React, { useState } from 'react'
import styled from 'styled-components'
import { BulletedTextArea } from 'react-bulleted-textarea'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import { Code } from '@material-ui/icons'
import AceEditor from 'react-ace'

import 'ace-builds/webpack-resolver'
import 'ace-builds/src-min-noconflict/mode-javascript'
import 'ace-builds/src-min-noconflict/theme-monokai'

const Heading = styled.p`
  font-family: Roboto;
  font-weight: 300;
  font-size: 20px;
  margin: 0;
  margin-bottom: 20px;
`

const SourceDivider = styled.div`
  width: 100%;
  padding: 10px;
`

const sourceCode = `
import React from "react";
import { BulletedTextArea } from "react-bulleted-textarea";

const Demo = () => {
    const values = ['a', 'b', 'c'];
    return (
      <div>
        <BulletedTextArea
            onChange={(value) => console.log(value)}
            values={values}
         />
      </div>
     );
};

export default Demo;
`

const Demo = () => {
  const [open, setOpen] = useState(true)
  const values = ['a', 'b', 'c']

  return (
    <Grid item xs={12} md={6}>
      <Heading variant='body1'>Text Area</Heading>
      <BulletedTextArea
        onChange={(value) => console.log(value)}
        values={values}
      />
      <SourceDivider>
        <Button
          variant='contained'
          color='default'
          size='small'
          startIcon={<Code />}
          onClick={() => setOpen(!open)}
        >
          Show Source
        </Button>
      </SourceDivider>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <AceEditor
          mode='javascript'
          theme='monokai'
          value={sourceCode}
          readOnly
          width='100%'
          setOptions={{ useWorker: false }}
        />
      </Collapse>
    </Grid>
  )
}

export default Demo
