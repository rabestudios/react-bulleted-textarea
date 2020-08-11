# react-bulleted-textarea

> React component for bulleted textarea

[![NPM](https://img.shields.io/npm/v/react-bulleted-textarea.svg)](https://www.npmjs.com/package/react-bulleted-textarea) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Check out live [demo](https://react-bulleted-textarea.herokuapp.com/)

## Install

```bash
npm install --save react-bulleted-textarea
```

## Usage

```jsx
import React from 'react'

import BulletedTextArea from 'react-bulleted-textarea'

class Example extends Component {
  render() {
    const values = ['a', 'b', 'c']
    const handleChange = (values) => {
      console.log(values) // [a, b, c]
    }
    const bulletChar = '-' // optional
    return (
      <BulletedTextArea
        onChange={handleChange}
        values={values}
        bulletChar={bulletChar}
      />
    )
  }
}
```

## Props

| Prop Name  | Type | Required  | Default Value  | Description  |
|---|---|---|---|---|
| onChange  | (values: string[]) => void  | true  | n/a  | Function that is called everytime the user writes something in the text area  |
| values  |  string[] | false  | [ ]  | Initial values for the text area  |
|  bulletChar | string  | false  | -  | Character used as bullet points  |

## License

MIT © [chrisrabe](https://github.com/chrisrabe)
