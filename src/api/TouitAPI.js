const TouitAPI = (callback) => {
	setInterval(() => {
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
			.then(json => callback(json));

	}, 1000);
}

export default TouitAPI;
