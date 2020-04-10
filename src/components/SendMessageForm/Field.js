import React from 'react';
import './Field.scss';

const Field = (props) => {
	let {name, type, value, maxLength} = props;
	if (type === "submit")
		name = '';
	return (
		<label for={name}>
			<input id={name} name={name} type={type} defaultValue={value ? value : ''} placeholder=" " maxLength={maxLength ? maxLength : ''}/>
			<span>{name}</span>
		</label>
	);
}

export default Field;
