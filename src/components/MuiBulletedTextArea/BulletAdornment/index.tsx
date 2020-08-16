import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import styled from 'styled-components'
import { Bullet } from '../../../styles'

const StyledAdornment = styled(InputAdornment)`
  flex-direction: column;
  max-height: unset;
  height: unset;
`

export interface BulletAdornmentProps {
  bulletChar?: string
  lines: number
}

const BulletAdornment: React.FC<BulletAdornmentProps> = (props) => {
  const { bulletChar, lines } = props
  const bullets = new Array(lines).fill(bulletChar)
  return (
    <StyledAdornment position='start'>
      {bullets.map((bullet, i) => (
        <Bullet key={`bullet-${i}`}>{bullet}</Bullet>
      ))}
    </StyledAdornment>
  )
}

BulletAdornment.defaultProps = {
  bulletChar: '-'
}

export default BulletAdornment
