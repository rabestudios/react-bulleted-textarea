import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

export interface QuickLinkProps {
  label: string
  url: string
  icon: any
}

const QuickLink: React.FC<QuickLinkProps> = (props) => {
  const { label, url, icon } = props
  return (
    <Tooltip title={label}>
      <IconButton onClick={() => window.open(url, '_blank')}>{icon}</IconButton>
    </Tooltip>
  )
}

export default QuickLink
