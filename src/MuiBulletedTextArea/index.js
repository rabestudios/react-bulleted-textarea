import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const MuiBulletedTextArea = (props) => {
  const { bulletChar, onChange, values, ...rest } = props

  return <TextField variant='outlined' multiline {...rest} />
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
