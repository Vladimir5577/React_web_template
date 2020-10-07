import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

import img_1 from '../Assets/img_1.jpg'
import img_2 from '../Assets/img_2.jpeg'
import img_3 from '../Assets/img_3.jpg'


export default class Home extends Component {
	render () {
		return (
			<div>
				<CarouselBox />
				<Container>
					<h2 className="text-center m-4">Out team</h2>
					<CardDeck className="m-4">
						<Card bg="light" border="success" text="primary">
							<Card.Img variant="top" src={ img_1 } />
							<Card.Body>
								<Card.Title>Developers</Card.Title>
								<Card.Text>
									Lorem ipsum dolor sit am consectetur adipisicing el sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor reprehenderit voluptate velit esse
									cillum dolore eu fugiat nulla pariatur.
								</Card.Text>
								<Button variant="primary">About team</Button>
							</Card.Body>
						</Card>

						<Card>
							<Card.Img variant="top" src={ img_2 } />
							<Card.Body>
								<Card.Title>Contacts</Card.Title>
								<Card.Text>
									minim veni
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor reprehenderit voluptate velit esse
									cillum dolore eu fugiat nulla pariatur.
								</Card.Text>
								<Button variant="primary">About team</Button>
							</Card.Body>
						</Card>

						<Card>
							<Card.Img variant="top" src={ img_3 } />
							<Card.Body>
								<Card.Title>About</Card.Title>
								<Card.Text>
									 am consectetur adipisicing el sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor reprehenderit voluptate velit esse
									cillum dolore eu fugiat nulla pariatur.
								</Card.Text>
								<Button variant="primary">About team</Button>
							</Card.Body>
						</Card>


					</CardDeck>
				</Container>
			</div>
		)
	}
}