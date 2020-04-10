import React, { useState } from 'react';
import './Touits.scss';
import * as TouitAPI from '../api/TouitAPI';
import * as Modal from './Modal/Modal';

const Touits = (props) => {
/* TODO display good informations from comments and also good display for buttons */
	const [modal, setModal] = useState('');
	const {comments_count, id, ip, likes, message, name, ts, comment} = props;
	const openComments = e => {
		Modal.openModal(e, setModal, 'comment');
		const modal = document.querySelector('.modal');
		if (modal)
			modal.focus();
	};
	const hide = comment ? "hide" : "";
	return (
		<div className="touit">
			<span className={hide}>
				{id ? id : "Undefined"}
			</span>
			<span>
				{ts ? (new Date(ts*1000)).toLocaleString() : "Undefined"}
			</span>
			<span>
				{name ? name : "Undefined"}
			</span>
			<span>
				{message ? message : (comment ? comment : "Undefined")}
			</span>
			<span className={hide}>
				<button id={id} onClick={TouitAPI.sendLike}>
					Likes {likes !== false ? likes : "Undefined"}
				</button>
				<button id={id} onClick={TouitAPI.sendDislike}>
					Dislike
				</button>
				<button id={id} onClick={openComments}>
					Commentaires {comments_count !== false ? comments_count : "Undefined"}
				</button>
				{modal}
			</span>
		</div>
	);
}

export default Touits;
