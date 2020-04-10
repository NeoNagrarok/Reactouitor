import React, { useState } from 'react';
import './SendMessageForm.scss';
import * as TouitAPI from '../api/TouitAPI';
import Field from './SendMessageForm/Field';
import PostMessage from './SendMessageForm/PostMessage';

const SendMessageForm = (props) => {
	const form = [
		{
			"name": "pseudo",
			"type": "text",
			"maxLength": 16
		},
		{
			"name": "message",
			"type": "text",
			"maxLength": 256
		},
		{
			"name": "send",
			"type": "submit",
			"value": "Send"
		}
	];
	const [postInfos, setPostInfos] = useState('');
	const sendForm = e => {
		TouitAPI.postForm({"event":e, "callback":setPostInfos, "type": props.type ? "comment" : "message"});
	}
	return (
		<form id={props.id} onSubmit={sendForm}>
			<PostMessage post={postInfos} />
			<fieldset>
				{form.map((m, i) => <Field {...m} key={i} />)}
			</fieldset>
		</form>
	);
}

export default SendMessageForm;
