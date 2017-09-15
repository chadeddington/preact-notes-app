import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Login from '../routes/login';
import Profile from '../routes/profile';
// import Login from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	signIn = () => {
		this.setState({ loggedIn: true });
	}

	logOut = () => {
		firebase.auth().signOut().then(() => {
		  // Sign-out successful.
			this.setState({ loggedIn: false });
		}).catch((error) => {
		  // An error happened.
			// console.log('Error logging out: ', error)
		});


	}

	constructor() {
		super();
		this.state = { loggedIn: false };
	}

	componentDidMount() {
		const _this = this;
		// Auth listener
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				// console.log('auth changed event');
				_this.signIn();
			} else {
				// No user is signed in.
			}
		});
	}

	render(props, state) {
		return (
			<div id="app">
				<Header loggedIn={state.loggedIn} logOut={this.logOut} />
				{
					!state.loggedIn ?
						<Router onChange={this.handleRoute}>
							<Login path="/" signIn={this.signIn} />
						</Router> :
						<Router onChange={this.handleRoute}>
							<Profile path="/" user="me" />
						</Router>
				}
			</div>
		);
	}
}
