import React from 'react';
/*import { Button } from 'reactstrap';*/
import './Styles/App.css';
import styled from "styled-components";

import Weather from './Components/Weather';
import Form from './Components/Form';
import Titles from './Components/Titles';

/*import Chart from './Components/Chart';*/

const API_KEY = "59d631c47c8843a69be8226c46c88460";

class App extends React.Component {
	state = {
		//
		/*chartData:{},*/
		//
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		wind_direction: undefined,
		wind_speed: undefined,
		description: undefined,
		error: undefined
	}

	getWeather = async (e) => {
		e.preventDefault();

		// get name
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;

		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();
/*<Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>*/
		if(city && country) {
			console.log(data);
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				wind_direction: data.wind.deg,
				wind_speed: data.wind.speed,
				description: data.weather[0].description
			});
		} else {
			this.setState({
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			wind_direction: undefined,
			wind_speed: undefined,
			description: undefined,
			error: "Please enter values"
		});
	}
	}
	render() {
		return(
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-xs-5 title-container">
									<Titles />
								</div>
								<div className="col-xs-7 form-container">
									<Form getWeather={this.getWeather} />
									<Weather

										temperature={this.state.temperature}

										city={this.state.city}

										country={this.state.country}

										humidity={this.state.humidity}

										wind_direction={this.state.wind_direction}

										wind_speed={this.state.wind_speed}

										description={this.state.description}

										error={this.state.error}

										/>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default App;
