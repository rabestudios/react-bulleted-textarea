import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  TextArea,
  Container,
  Bullet,
  BulletContainer,
  BASE_HEIGHT
} from '../../styles'

export interface BulletedTextAreaProps {
  onChange: (values: string[]) => void
  values: string[]
  bulletChar?: string
}

const BulletedTextArea: React.FC<BulletedTextAreaProps> = (props) => {
  const { bulletChar, onChange, values, ...rest } = props
  const [lines, setLines] = useState(values.length > 0 ? values.length : 1)
  const [value, setValue] = useState(values.join('\n'))

  useEffect(() => {
    setValue(values.join('\n'))
  }, [values])

  const handleChange = useCallback(
    (e) => {
      const newValue = e.target.value
      const values = newValue.split('\n')
      const curLines = values.length
      if (curLines !== lines) {
        setLines(curLines)
      }
      setValue(newValue)
      // split the values and return array
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

BulletedTextArea.defaultProps = {
  bulletChar: '-',
  values: []
}

export default BulletedTextArea
