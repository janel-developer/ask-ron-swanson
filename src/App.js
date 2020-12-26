import React from 'react'
import styled from 'styled-components'
import Answer from './Answer'
import './App.css'

const Heading = styled.span `
	font-size: 2em;
`
const App = () => {
  return (
    <div >
		<Heading>Ask Ron Swanson</Heading>
		<Answer />
    </div>
  )
}

export default App
