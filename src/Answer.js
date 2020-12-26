import React, {useState} from 'react'
import styled from 'styled-components'

const ImageDiv = styled.div `
	width: 100%;	
	height: 100vh;
	position: relative;
	background-image: url('ron-swanson-portrait.jpg');
	background-repeat: no-repeat;
	@media (min-width: 768px) {
		background-image: url('ron-swanson.jpg');
	}
`

const AnswerDiv = styled.div `
	position: absolute;
	width: 45%;
	top: 80px;
	left: 10px;
	color: white;
	font-size: 1.2em;
	background-color: rgba(0, 0, 0, .7);
	padding: 8px;
	@media (min-width: 768px) {
		font-size: 2em;
	}
`

const Button = styled.div `
	font-size: 1.2em;
	padding: 5px;
	width: 280px;
	text-align: center;
	background-color: #990033;
	margin: 10px 0;
	color: white;
	:hover {
		background-color: #ff3300;
	}
`

const Answer = () => {
	const [quote, setQuote] = useState(null)
	const API = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

	function handleClick(event) {
		event.preventDefault()
		fetch(API)
		.then((response) => response.json())
		.then((quote) => setQuote(quote))
		.catch((err) => console.error(err))

	}

	return (
		<>
			<Button onClick={handleClick}>Give me your wisdom, Ron</Button>
		<ImageDiv>
			{ quote && <AnswerDiv> {quote} </AnswerDiv> }
		</ImageDiv>
		</>
	)
}

export default Answer
