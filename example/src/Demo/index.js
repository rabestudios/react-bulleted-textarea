import React, { useState } from 'react'
import styled from 'styled-components'
import { BulletedTextArea, MuiBulletedTextArea } from 'react-bulleted-textarea'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import { Code } from '@material-ui/icons'
import AceEditor from 'react-ace'
import { Heading, Body } from '../styles'

import 'ace-builds/webpack-resolver'
import 'ace-builds/src-min-noconflict/mode-javascript'
import 'ace-builds/src-min-noconflict/theme-monokai'

const SourceDivider = styled.div`
  width: 100%;
  padding: 10px;
`

const StyledMUITextArea = styled(MuiBulletedTextArea)`
  width: 100%;
  background-color: white;
`

// SOURCE CODE DEFAULT
const defaultSource = `
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

// SOURCE CODE MATERIAL-UI
const muiSource = `
import React from "react";
import { MuiBulletedTextArea } from "react-bulleted-textarea";
import styled from "styled-components"

const StyledTextArea = styled(MuiBulletedTextArea)\`
    width: 100%;
    background-color: white;
\`

const Demo = () => {
    const values = ['a', 'b', 'c'];
    return (
      <div>
        <StyledTextArea
            onChange={(value) => console.log(value)}
            values={values}
         />
      </div>
     );
};

export default Demo;
`

const Demo = () => {
  const [codeIndex, setCodeIndex] = useState(-1)
  const values = ['a', 'b', 'c']

  return (
    <Grid item xs={12} md={6}>
      <Heading variant='body1'>Default Bulleted Text Area</Heading>
      <Body>Bulleted text area using styled-components. (Warning: Kinda buggy when mixed with material-ui)</Body>
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
          onClick={() => (codeIndex === 0 ? setCodeIndex(-1) : setCodeIndex(0))}
        >
          Show Source
        </Button>
      </SourceDivider>
      <Collapse in={codeIndex === 0} timeout='auto' unmountOnExit>
        <AceEditor
          mode='javascript'
          theme='monokai'
          value={defaultSource}
          readOnly
          width='100%'
          setOptions={{ useWorker: false }}
        />
      </Collapse>
      {/*MUI bulleted text area source*/}
      <Heading>Material UI Bulleted Text Area</Heading>
      <Body>Bulleted text area built using material-ui components</Body>
      <StyledMUITextArea
        onChange={(values) => console.log(values)}
        values={values}
      />
      <SourceDivider>
        <Button
          variant='contained'
          color='default'
          size='small'
          startIcon={<Code />}
          onClick={() => (codeIndex === 1 ? setCodeIndex(-1) : setCodeIndex(1))}
        >
          Show Source
        </Button>
      </SourceDivider>
      <Collapse in={codeIndex === 1} timeout='auto' unmountOnExit>
        <AceEditor
          mode='javascript'
          theme='monokai'
          value={muiSource}
          readOnly
          width='100%'
          setOptions={{ useWorker: false }}
        />
      </Collapse>
    </Grid>
  )
}

export default Demo
