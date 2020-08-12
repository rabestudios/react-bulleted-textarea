import React, { useState, useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  TextArea,
  Container,
  BulletContainer,
  Bullet,
  BASE_HEIGHT
} from '../styles'

const BulletedTextArea = (props) => {
  const { bulletChar, onChange, values, ...rest } = props
  const [lines, setLines] = useState(values.length > 0 ? values.length : 1)
  const [value, setValue] = useState(values.join('\n'))

  useEffect(() => {
    setValue(values.join('\n'))
  }, [values])

  const handleChange = useCallback(
    (e) => {
      const newValue = e.target.value
      const curLines = newValue.split('\n').length
      if (curLines !== lines) {
        setLines(curLines)
      }
      setValue(newValue)
      // split the values and return array
      const values = newValue.trim().split('\n')
      onChange(values)
    },
    [setValue, setLines, lines, onChange]
  )

  const handleKeyPress = useCallback((e) => {
    // when enter pressed, reset scroll to left
    if (e.charCode === 13) {
      e.target.scrollLeft = 0
    }
  }, [])

  return useMemo(() => {
    const height = BASE_HEIGHT * lines
    const bullets = new Array(lines).fill(bulletChar)
    return (
      <Container height={height} {...rest}>
        <BulletContainer>
          {bullets.map((bullet, i) => (
            <Bullet key={`bullet-${i}`}>{bullet}</Bullet>
          ))}
        </BulletContainer>
        <TextArea
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </Container>
    )
  }, [value, lines, handleChange])
}

BulletedTextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.string),
  bulletChar: PropTypes.string
}

BulletedTextArea.defaultProps = {
  bulletChar: '-',
  values: []
}

export default BulletedTextArea
