import React, { Component } from 'react'
import { Media, Container, Col, Row, Card, ListGroup } from 'react-bootstrap'

import img_1 from '../Assets/prog_1.png'
import img_2 from '../Assets/prog_2.png'
import img_3 from '../Assets/prog_3.png'

export default class Blog extends Component {
	render () {
		return (
			<Container>
				<Row>
					<Col md="9">
						<Media className="m-5">
							<img 
								width={ 150 }
								height={ 150 }
								className="mr-3"
								src={ img_1 }
								alt="img"
							/>
							<Media.Body>
								<h5>Blog post</h5>
								<p>
									Lorem ipsum dolor sit ame consectetur adipisicing eli sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. 
								</p>
							</Media.Body>
						</Media>

						<Media className="m-5">
							<img 
								width={ 150 }
								height={ 150 }
								className="mr-3"
								src={ img_2 }
								alt="img"
							/>
							<Media.Body>
								<h5>Laravel</h5>
								<p>
									Consectetur adipisicing eli sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. 
								</p>
							</Media.Body>
						</Media>

						<Media className="m-5">
							<img 
								width={ 150 }
								height={ 150 }
								className="mr-3"
								src={ img_3 }
								alt="img"
							/>
							<Media.Body>
								<h5>React</h5>
								<p>
									Dusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. 
								</p>
							</Media.Body>
						</Media>

						<Media className="m-5">
							<img 
								width={ 150 }
								height={ 150 }
								className="mr-3"
								src={ img_1 }
								alt="img"
							/>
							<Media.Body>
								<h5>Blog post</h5>
								<p>
									Lorem ipsum dolor sit ame consectetur adipisicing eli sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. 
								</p>
							</Media.Body>
						</Media>

						<Media className="m-5">
							<img 
								width={ 150 }
								height={ 150 }
								className="mr-3"
								src={ img_2 }
								alt="img"
							/>
							<Media.Body>
								<h5>Laravel</h5>
								<p>
									Consectetur adipisicing eli sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. 
								</p>
							</Media.Body>
						</Media>

						<Media className="m-5">
							<img 
								width={ 150 }
								height={ 150 }
								className="mr-3"
								src={ img_3 }
								alt="img"
							/>
							<Media.Body>
								<h5>React</h5>
								<p>
									Dusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. 
								</p>
							</Media.Body>
						</Media>
					</Col>

					<Col md="3" >
						<h4 className="text-center mt-5">Categories</h4>
						<Card>
							<ListGroup variant="flush">
								<ListGroup.Item>Html/Css</ListGroup.Item>
								<ListGroup.Item>JavaScript</ListGroup.Item>
								<ListGroup.Item>React</ListGroup.Item>
								<ListGroup.Item>Laravel</ListGroup.Item>
								<ListGroup.Item>PHP</ListGroup.Item>
							</ListGroup>
						</Card>

						<Card>
							<Card.Body>
								<Card.Title>Programming</Card.Title>
								<Card.Text>
									Consectetur adipisicing eli sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}
}
