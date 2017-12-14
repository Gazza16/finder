import React, { Component } from 'react';
import { Button, Image, Progress } from 'reactbulma'


class Profile extends Component {
	state = {
		gamble: true,
		user: null
	}
	getNextUser = () => {

		this.setState({
			user: null
		})

		fetch('https://randomuser.me/api/')
		.then((response) => {
			return response.json()
		}).then(users => {
			console.log(users.results[0].name.first)
			this.setState({
				user: users.results[0]
			})
			this.props.incrementViewed()
		})
		
	}

	randomGamble = () => {
		this.setState({
			gamble: false
		})
	}

    render() {
     const { user } = this.state
  	  return (
	  	 <div>
	  		{!user ? (<p>Loading...</p>) : (
	  			<div>
	  			<Progress info value={this.props.viewed} max={this.props.maxViews}>{this.props.viewed}%</Progress>
	  			<Image is="128x128" src={user.picture.medium} />
	  			<p>{ user.name.first }</p>	
	  			{this.props.viewed < this.props.maxViews && <Button info onClick={this.getNextUser}>Next</Button> }
	  			{ this.state.gamble && <Button onClick={this.randomGamble()}>Gamble</Button> }
	  	    </div>
	  		)}
	  	</div>
    );
  }


	componentDidMount() {
		this.getNextUser()
	}

}
export default Profile;
