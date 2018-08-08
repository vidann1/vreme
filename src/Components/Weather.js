import React from 'react';




const Weather = props => (
	<div>
		{ props.city && props.country && <p>Lokacija: { props.city }, { props.country }</p>}
		{ props.temperature && <p>Temperatura: { props.temperature }</p>}
		{ props.humidity && <p>Vlaznost vazduha: { props.humidity }</p>}
		{ props.description && <p>Opis: { props.description }</p>}
		{ props.error && <p> {props.error} </p>}
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
