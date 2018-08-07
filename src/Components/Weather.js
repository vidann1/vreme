import React from 'react';



 class Weather extends React.Component {
	render() {
		return(
			<div>

			{ this.props.city && this.props.country && <p>Lokacija: { this.props.city }, { this.props.country }</p>}
			{ this.props.temperature && <p>Temperatura: { this.props.temperature }</p>}
			{ this.props.humidity && <p>Vlaznost vazduha: { this.props.humidity }</p>}
			{ this.props.description && <p>Opis: { this.props.description }</p>}

			</div>
		);
	}
}

export default Weather;
