import styled from 'styled-components'
import { BugReport, Folder, GitHub } from '@material-ui/icons'

export const Container = styled.div`
  width: 100%;
  padding: 5px;
  background-color: #544a79;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  margin: 10px;
  font-weight: 300;
  font-size: 30px;
  font-family: Roboto;
  color: white;
  text-align: center;
`

export const QuickLinks = styled.div`
  display: flex;
  flex-direction: row;
`

export const GithubLogo = styled(GitHub)`
  color: white;
`

export const BugReportLogo = styled(BugReport)`
  color: white;
`

export const FolderLogo = styled(Folder)`
  color: white;
`

export const VersionText = styled.p`
  margin: 10px;
  font-weight: 500;
  font-size: 15px;
  font-family: Roboto;
  color: white;
  text-align: center;
`
