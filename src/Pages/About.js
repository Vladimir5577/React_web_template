import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'
import img_1 from '../Assets/img_1.jpg'
import img_2 from '../Assets/img_2.jpeg'
import img_3 from '../Assets/img_3.jpg'
import img_4 from '../Assets/img_4.png'
import img_5 from '../Assets/img_5.jpg'

export default class About extends Component {
	render () {
		return (
			<Container>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm={ 3 } >
							<Nav variant="pills" className="flex-column mt-2">
								<Nav.Item>
									<Nav.Link eventKey="first">Design</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="team">Team</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="programming">Programming</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="react">React</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="laravel">Laravel</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>

						<Col sm={ 9 }>
							<Tab.Content className="mt-3">
								<Tab.Pane eventKey="first"> 
									<img src={ img_1 } alt="ima" />
									<p>
										Lorem ipsum dolor sit ame consectetur adipisicing eli sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. 
									</p>
								</Tab.Pane>

								<Tab.Pane eventKey="team"> 
									<img src={ img_2 } alt="ima" />
									<p>
										Wsit ame consectetur adipisicing eli sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. 
									</p>
								</Tab.Pane>

								<Tab.Pane eventKey="programming"> 
									<img src={ img_3 } alt="ima" />
									<p>
										Sgdh eli sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. 
									</p>
								</Tab.Pane>

								<Tab.Pane eventKey="react"> 
									<img src={ img_4 } alt="ima" />
									<p>
										 Ut enim ad minim venia
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. 
									</p>
								</Tab.Pane>

								<Tab.Pane eventKey="laravel"> 
									<img src={ img_5 } alt="ima" />
									<p>
										Folore magna aliqua. Ut enim ad minim venia
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor  reprehenderit  voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. 
									</p>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Container>
		)
	}
}