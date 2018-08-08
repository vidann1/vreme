import React from 'react';

import Weather from './Components/Weather';
import Form from './Components/Form';
import Titles from './Components/Titles';

const API_KEY = "59d631c47c8843a69be8226c46c88460";

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
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

		if(city && country) {
			console.log(data);
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
			});
		} else {
			this.setState({
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: "Please enter values"
		});
	}

	}
	render() {
		return(
			<div>

			<Titles />
			<Form getWeather={this.getWeather} />
			<Weather
				temperature={this.state.temperature}
				city={this.state.city}
				country={this.state.country}
				humidity={this.state.humidity}
				description={this.state.description}
				error={this.state.error}
				/>
			</div>
		)
	}
}

export default App;
