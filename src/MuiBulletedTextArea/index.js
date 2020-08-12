import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import BulletAdornment from './BulletAdornment'

const MuiBulletedTextArea = (props) => {
  const { bulletChar, onChange, values, ...rest } = props
  const [lines, setLines] = useState(values.length > 0 ? values.length : 1)
  const [value, setValue] = useState(values.join('\n'))

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

MuiBulletedTextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.string),
  bulletChar: PropTypes.string
}

MuiBulletedTextArea.defaultProps = {
  bulletChar: '-',
  values: []
}

export default MuiBulletedTextArea
