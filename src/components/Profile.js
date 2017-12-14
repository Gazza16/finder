import React, { Component } from 'react';
import { Button } from 'reactbulma'


class Profile extends Component {
	state = {
		user: null
	}
	getNextUser = () => {
		fetch('https"//randomuser.me/api/')
		.then((response) => {
			return response.json()
		}).then(users => {

		})
		
	}
    render() {
  		return (
  		<div>
  			<p>Profile!</p>
  			<button info>Next</button>
  		</div>
    );
  }
}

export default Profile;
