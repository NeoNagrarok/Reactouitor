import './TouitAPI.scss';

const TouitAPI = (props) => {
	setInterval(() => props.getJson('{"Toto":"tutu"}'), 1000);
	return null;
}

export default TouitAPI;
