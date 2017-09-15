import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = (props, state) => (
	<header class={style.header}>
		<h1>Preact Notebooks</h1>
		{ props.loggedIn ?
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/profile">Me</Link>
				<Link activeClassName={style.active} href="/profile/Chad">Chad</Link>
				<button onClick={props.logOut}>Log Out</button>
			</nav> :
			<nav>

			</nav>
		}
	</header>
);

export default Header;
