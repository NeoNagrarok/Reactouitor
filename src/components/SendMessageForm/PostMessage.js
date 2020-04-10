import React from 'react';
import './PostMessage.scss';

const PostMessage = (props) => {
	const message = props.post ? (props.post.error ? props.post.error : 'Message ' + props.post.id + ' received !') : '';
	return (
		<span className="postMessage">
			{message}
		</span>
	);
}

export default PostMessage;
