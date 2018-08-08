import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Grad"/>
		<input type="text" name="country" placeholder="Drzava"/>

		<button className="btn btn-sm btn-danger">Nadji</button>
	</form>
);

/*
 class Form extends React.Component {
	render() {
		return(

			<form onSubmit={this.props.getWeather}>
				<input type="text" name="city" placeholder="Grad"/>
				<input type="text" name="country" placeholder="Drzava"/>
				<button>Get</button>
			</form>

		);
	}
}
*/
export default Form;
