import React from 'react';
import './Header.scss';
import SendMessageForm from './SendMessageForm';

const Header = (props) => {
	return (
		<header>
			<h1>Reactouitor</h1>
			<SendMessageForm />
		</header>
	);
}

export default Header;
