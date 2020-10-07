import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import forest_1 from '../Assets/forest_1.jpg'
import forest_2 from '../Assets/forest_2.jpg'
import forest_3 from '../Assets/forest_3.jpg'

export default class CarouselBox extends Component {
	render () {
		return (
			<Carousel>
				<Carousel.Item>
					<img 
						className="d-block w-100"
						src={ forest_1 }
						alt="Forest"
					/>
					<Carousel.Caption>
						<h3>Summer Forest</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img 
						className="d-block w-100"
						src={ forest_3 }
						alt="Forest"
					/>
					<Carousel.Caption>
						<h3>Otumn Forest</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img 
						className="d-block w-100"
						src={ forest_2 }
						alt="Forest"
					/>
					<Carousel.Caption>
						<h3>Winter Forest</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		)
	}
}