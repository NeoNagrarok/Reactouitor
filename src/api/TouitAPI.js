// TODO find a way to improve the sending queries througth the network. It is not veru light :/ 

export const getList = (callback, type = null, id = null) => {
	const myHeaders = new Headers();

	const myInit = {
		method: 'GET',
		headers: myHeaders,
		mode: 'cors',
		cache: 'default'
	};

	let url = 'http://touiteur.cefim-formation.org/list';
	if (type)
	{
		if (id)
			url = 'http://touiteur.cefim-formation.org/comments/list?message_id=' + encodeURIComponent(id);
		else
			url = 'http://touiteur.cefim-formation.org/trending';
	}

	const myRequest = new Request(url ,myInit);

	fetch(myRequest,myInit)
		.then(response => response.json())
		.then(json => {
			callback(json);
		});
}

export const postForm = params => {
	const {event, callback, type} = params;
	event.preventDefault();

	const pseudo = event.target[1].value;
	const message = event.target[2].value;
	event.target[2].value = '';


	let url = 'http://touiteur.cefim-formation.org/send';
	let bodyContent = 'name=' + encodeURIComponent(pseudo) + '&message=' + encodeURIComponent(message);
	if (type === "comment")
	{
		url = 'http://touiteur.cefim-formation.org/comments/send';
		bodyContent = 'name=' + encodeURIComponent(pseudo) + '&comment=' + encodeURIComponent(message) + '&message_id=' + encodeURIComponent(event.target.id);
	}

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		body: bodyContent
	};

	fetch(url, requestOptions)
		.then(response => response.json())
		.then(postInfos => {
			callback(postInfos);
		});
}

export const sendLike = e =>
{
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		mode: 'cors',
		cache: 'default',
		body: 'message_id=' + encodeURIComponent(e.target.id)
	};
		
	fetch('http://touiteur.cefim-formation.org/likes/send', requestOptions)
		.then(response => response.json())
		.then(likeInfos => {
			console.log(likeInfos);
		});
}

export const sendDislike = e =>
{
	const requestOptions = {
		method: 'DELETE',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		mode: 'cors',
		cache: 'default',
		body: 'message_id=' + encodeURIComponent(e.target.id)
	};
		
	fetch('http://touiteur.cefim-formation.org/likes/remove', requestOptions)
		.then(response => response.json())
		.then(dislikeInfos => {
			console.log(dislikeInfos);
		});
}

export const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

