import React from 'react';




const Weather = props => (
	<div className="weather__info">
		{
			props.city && props.country && <p className="weather__key">Lokacija:
			 <span className="weather__value"> { props.city }, { props.country }</span>
		 </p>
	 	}
		{
		 	props.temperature && <p className="weather__key">Temperatura:
			 <span className="weather__value"> { props.temperature }°C</span>
		 </p>
		}
		{
			props.humidity && <p className="weather__key">Vlaznost vazduha:
			 <span className="weather__value"> { props.humidity }</span>
		 </p>
		}
		{
			props.wind_direction  &&  <p className="weather__key">Smer vetra:
			<span className="weather__value"> { props.wind_direction }° </span>
		</p>
		}
		{
			props.wind_speed && <p className="weather__key">Brzina vetra:
			<span class="weather__value"> { props.wind_speed }m/s </span>
		 </p>
		}
		{
			 props.description && <p className="weather__key">Opis:
			  <span className="weather__value"> { props.description }</span>
		  </p>
	 	}
		{
			 props.error && <p className="weather__key"> {props.error} </p>
	 	}
	</div>
)

/*
 class Weather extends React.Component {
	render() {
		return(
			<div>

			{ this.props.city && this.props.country && <p>Lokacija: { this.props.city }, { this.props.country }</p>}
			{ this.props.temperature && <p>Temperatura: { this.props.temperature }</p>}
			{ this.props.humidity && <p>Vlaznost vazduha: { this.props.humidity }</p>}
			{ this.props.description && <p>Opis: { this.props.description }</p>}
			{ this.props.error && <p> {this.props.error} </p>}

			</div>
		);
	}
}
*/
export default Weather;
