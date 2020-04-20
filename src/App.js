import React, { useState, useEffect } from 'react';
import './_base.scss';
import './App.scss';
import * as TouitAPI from './api/TouitAPI';
import Header from './components/Header';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';

/*
http://touiteur.cefim-formation.org/
http://touiteur.cefim-formation.org/list
http://touiteur.cefim-formation.org/list?ts=
http://touiteur.cefim-formation.org/send

http://touiteur.cefim-formation.org/likes/send
http://touiteur.cefim-formation.org/likes/top
http://touiteur.cefim-formation.org/likes/remove

http://touiteur.cefim-formation.org/comments/list?message_id=1
http://touiteur.cefim-formation.org/comments/send?message_id=1

http://touiteur.cefim-formation.org/influencers?count=3
http://touiteur.cefim-formation.org/trending
*/

function App() {
	const [listTouits, setListTouits] = useState(null);
	const [trending, setTrending] = useState(null);
	const [dateRefresh, setDateRefresh] = useState(Date.now());


	useEffect(() => {
			TouitAPI.getList(setTrending, 'trending');
			TouitAPI.getList(setListTouits);
	  const interval = setInterval(() => {
			TouitAPI.getList(setTrending, 'trending');
			TouitAPI.getList(setListTouits);
	  }, 1500);
	  return () => clearInterval(interval);
	}, []);
		
	let date = "Undifined";
	if (listTouits)
		date = (new Date(listTouits.ts*1000)).toLocaleString();
	return (
		<main className="App">
			<Header date={date}/>
			<TouitContainer listTouits={listTouits} />
			<Trending listTouits={listTouits} trending={trending}/>
		</main>
	);
}

export default App;
