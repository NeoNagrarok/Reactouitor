const TIMER = 1100;

const TouitAPI = (callback) => {
	const myHeaders = new Headers();

	const myInit = {
		method: 'GET',
		headers: myHeaders,
		mode: 'cors',
		cache: 'default'
	};

	const myRequest = new Request('http://touiteur.cefim-formation.org/list',myInit);

	fetch(myRequest,myInit)
		.then(response => response.json())
		.then(json => {
			callback(json);
			setTimeout(this, TIMER * 1.5);
		});
}

export default TouitAPI;
