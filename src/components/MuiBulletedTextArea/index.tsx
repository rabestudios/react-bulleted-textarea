import React, { useCallback, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import BulletAdornment from './BulletAdornment'

interface MuiBulletedTextAreaProps {
  onChange: (values: string[]) => void
  values: string[]
  bulletChar?: string
}

const MuiBulletedTextArea: React.FC<MuiBulletedTextAreaProps> = (props) => {
  const { bulletChar, onChange, values, ...rest } = props
  const [lines, setLines] = useState(values.length > 0 ? values.length : 1)
  const [value, setValue] = useState(values.join('\n'))

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

  useEffect(() => {
    setValue(values.join('\n'))
  }, [values, setValue])

  return (
    <TextField
      variant='outlined'
      multiline
      InputProps={{
        startAdornment: (
          <BulletAdornment bulletChar={bulletChar} lines={lines} />
        )
      }}
      onChange={handleChange}
      value={value}
      {...rest}
    />
  )
}

MuiBulletedTextArea.defaultProps = {
  values: []
}

export default MuiBulletedTextArea
