import React from 'react'
import styled from 'styled-components'

export const BASE_HEIGHT: number = 19

export const Container = styled(({ height, ...rest }) => {
  return <div {...rest} />
})`
  height: ${(props) => props.height}px;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`

export const TextArea = styled.textarea`
  line-height: 1.1876em;
  height: 100%;
  width: 100%;
  resize: none;
  padding: 18.5px;
  padding-left: 35px;
  padding-right: 14px;
  align-items: 'center';
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: rgba(0, 0, 0, 0.87);
  border-color: rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  font-size: 1rem;
  letter-spacing: 0.00938em;
  white-space: nowrap;
  outline: none;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    width: 5px;
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    width: 5px;
    background: rgba(0, 0, 0, 0.23);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`

export const BulletContainer = styled.div`
  position: absolute;
  padding: 18.5px 14px;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.23);
  border-left: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px 0px 0px 4px;
`

export const Bullet = styled.p`
  margin: 0;
  line-height: 1.1876em;
  color: rgba(0, 0, 0, 0.5);
`
