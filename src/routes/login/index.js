import { h, Component } from 'preact';
import style from './style';

class Login extends Component {
	createAccount = () => {
		// console.log('state ', this.state);
		firebase.auth().createUserWithEmailAndPassword(this.state.newEmail, this.state.newPass1)
		 .then((msg) => {
			// console.log('Succes! ', msg);
		 }).catch((error) => {
		  // Handle Errors here.
		  const errorMessage = error.message;
			alert('There was an error creating account' + errorMessage);
		  // console.log('There was an error: ', errorMessage)
		 });
	}

	logIn = () => {
		// console.log('state ', this.state);
		firebase.auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPass)
			.then((msg) => {
				// console.log('Success logging in: ', msg);
			}).catch((error) => {
			  // Handle Errors here.
			  const errorMessage = error.message;
				alert('There was an error Logging in: \n' + errorMessage);
			});
	}

	userEmail = (e) => {
		this.setState({ userEmail: e.target.value });
	}

	userPass = (e) => {
		this.setState({ userPass: e.target.value });
	}

	newEmail = (e) => {
		this.setState({ newEmail: e.target.value });
	}

	newPass1 = (e) => {
		this.setState({ newPass1: e.target.value });
	}

	newPass2 = (e) => {
		this.setState({ newPass2: e.target.value });
	}

	constructor() {
		super();
		this.state = {
			userEmail: '',
			userPass: '',
			newEmail: '',
			newPass1: '',
			newPass2: ''
		};
	}

	render(props, state) {

		return (
			<div class={style.home}>
				<h1>Log In</h1>
				<input type="text" placeholder="Email" onChange={this.userEmail} />
				<br />
				<input type="password" placeholder="Password" onChange={this.userPass} />
				<br />
				<button onClick={this.logIn}> Sign In </button>
				<br />

				<h1>Create Account</h1>
				<input type="text" placeholder="Email" onChange={this.newEmail} />
				<br />
				<input type="password" placeholder="Password" onChange={this.newPass1} />
				<br />
				<input type="password" placeholder="Confirm Password" onChange={this.newPass2} />
				<br />
				<input type="button" value="Sign up" onClick={this.createAccount} />
			</div>
		);
	}
}

export default Login;
