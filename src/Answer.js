import React, {useState} from 'react'
import styled from 'styled-components'

const ImageDiv = styled.div `
	width: 100%;	
	position: relative;
`

const AnswerDiv = styled.div `
	position: absolute;
	width: 50%;
	top: 80px;
	left: 20px;
	font-size: 30px;
	color: white;
	background-color: rgba(0, 0, 0, .7);
	padding: 10px;
`
const RonImage = styled.img `
	width: 100%;
`
const Button = styled.div `
	font-size: 1.5em;
	padding: 5px;
	width: 300px;
	text-align: center;
	background-color: #990033;
	margin: 10px 0;
	color: white;
	:hover {
		background-color: #ff3300;
	}
`

const Answer = () => {
	const [quote, setQuote] = useState('Ask me anything')
	const API = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'

	function handleClick(event) {
		event.preventDefault()
		fetch(API)
		.then((response) => response.json())
		.then((quote) => setQuote(quote))
		.catch((err) => console.error(err))

	}

	return (
		<ImageDiv>
			<Button onClick={handleClick}>Give me your wisdom, Ron</Button>
			<RonImage src='ron-swanson.jpg' />
			<AnswerDiv>
				{quote}
			</AnswerDiv>
		</ImageDiv>
	)
}

export default Answer
