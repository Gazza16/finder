import React, { Component } from 'react';
import { Button, Image } from 'reactbulma'


class Profile extends Component {
	state = {
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
    render() {
     const { user } = this.state
  	  return (
	  	 <div>
	  		{!user ? (<p>Loading...</p>) : (
	  			<div>
	  			<Image is="128x128" src={user.picture.medium} />
	  			<p>{ user.name.first }</p>	
	  			{this.props.viewed < this.props.maxViews && <Button info onClick={this.getNextUser}>Next</Button> }
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
