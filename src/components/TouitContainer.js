import React from 'react';
import './TouitContainer.scss';
import Touits from './Touits';

const TouitContainer = (props) => {
	const array = props.listTouits ? (props.listTouits.messages ? props.listTouits.messages : props.listTouits.comments) : [];
	return (
		<section className="touit-container">
			{array ? array.slice().reverse().map((m, i) => <Touits {...m} key={m.id} />) : "Undefined"}
		</section>
	);
}

export default TouitContainer;
