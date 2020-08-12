import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { GitHub, BugReport, Folder } from '@material-ui/icons'

const Container = styled.div`
  width: 100%;
  padding: 5px;
  background-color: #544a79;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  margin: 10px;
  font-weight: 300;
  font-size: 30px;
  font-family: Roboto;
  color: white;
  text-align: center;
`

const QuickLinks = styled.div`
  display: flex;
  flex-direction: row;
`

const GithubLogo = styled(GitHub)`
  color: white;
`

const BugReportLogo = styled(BugReport)`
  color: white;
`

const FolderLogo = styled(Folder)`
  color: white;
`

const VersionText = styled.p`
  margin: 10px;
  font-weight: 500;
  font-size: 15px;
  font-family: Roboto;
  color: white;
  text-align: center;
`

const Header = () => {
  return (
    <Container>
      <Title>Bulleted TextArea Demo</Title>
      <VersionText>v1.1.0</VersionText>
      <QuickLinks>
        <Tooltip title='Contribute'>
          <IconButton
            onClick={() =>
              window.open(
                'https://github.com/rabestudios/react-bulleted-textarea',
                '_blank'
              )
            }
          >
            <GithubLogo />
          </IconButton>
        </Tooltip>
        <Tooltip title='Report issues'>
          <IconButton
            onClick={() =>
              window.open(
                'https://github.com/rabestudios/react-bulleted-textarea/issues',
                '_blank'
              )
            }
          >
            <BugReportLogo />
          </IconButton>
        </Tooltip>
        <Tooltip title='NPM registry'>
          <IconButton>
            <FolderLogo />
          </IconButton>
        </Tooltip>
      </QuickLinks>
    </Container>
  )
}

export default Header
