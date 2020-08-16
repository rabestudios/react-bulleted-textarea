import React from 'react'
import {
  Container,
  Title,
  VersionText,
  QuickLinks,
  GithubLogo,
  BugReportLogo,
  FolderLogo
} from './styles'
import QuickLink, { QuickLinkProps } from './QuickLink'

const links: QuickLinkProps[] = [
  {
    label: 'Contribute',
    icon: <GithubLogo />,
    url: 'https://github.com/rabestudios/react-bulleted-textarea'
  },
  {
    label: 'Report issues',
    icon: <BugReportLogo />,
    url: 'https://github.com/rabestudios/react-bulleted-textarea/issues'
  },
  {
    label: 'NPM registry',
    icon: <FolderLogo />,
    url: 'https://www.npmjs.com/package/react-bulleted-textarea'
  }
]

const Header = () => {
  return (
    <Container>
      <Title>Bulleted TextArea Demo</Title>
      <VersionText>v1.1.0</VersionText>
      <QuickLinks>
        {links.map((link) => (
          <QuickLink
            key={link.label}
            label={link.label}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </QuickLinks>
    </Container>
  )
}

export default Header
