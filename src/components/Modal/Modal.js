import React, { useState } from 'react';
import './Modal.scss';
import SendMessageForm from '../SendMessageForm';
import * as TouitAPI from '../../api/TouitAPI';
import TouitContainer from '../TouitContainer';

const closeModal = (callback) => {
	document.body.style.overflow = 'initial';
	callback(null);
}

export const openModal = (event, callback, type) => {
	document.body.style.overflow = 'hidden';
	callback(<Modal id={event.target.id} callback={callback} type={type} />);
}

export const Modal = (props) => {
	const closeComment = () =>
	{
		closeModal(props.callback);
	}
	const [listTouits, setListTouits] = useState(null);
	TouitAPI.getList(setListTouits, props.type, props.id);
	return (
		<aside className="modal">
			<div className="inner">
				<div className="closeDiv">
					<button onClick={closeComment}>
						close
					</button>
				</div>
				<div className="modal-content">
					<TouitContainer listTouits={listTouits} />
				</div>
				<SendMessageForm id={props.id} type="comment" />
			</div>
		</aside>
	);
}
