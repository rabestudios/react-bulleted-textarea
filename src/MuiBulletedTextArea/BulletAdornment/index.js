import React from 'react'
import PropTypes from 'prop-types'
import InputAdornment from '@material-ui/core/InputAdornment'
import styled from 'styled-components'
import { Bullet } from '../../styles'

const StyledAdornment = styled(InputAdornment)`
  flex-direction: column;
  max-height: unset;
  height: unset;
`

const BulletAdornment = (props) => {
  const { bulletChar, lines } = props
  const bullets = new Array(lines).fill(bulletChar)
  return (
    <StyledAdornment
      position='start'
      style={{ flexDirection: 'column', maxHeight: 'unset', height: 'unset' }}
    >
      {bullets.map((bullet, i) => (
        <Bullet key={`bullet-${i}`}>{bullet}</Bullet>
      ))}
    </StyledAdornment>
  )
}

BulletAdornment.propTypes = {
  bulletChar: PropTypes.string.isRequired,
  lines: PropTypes.number.isRequired
}

export default BulletAdornment
