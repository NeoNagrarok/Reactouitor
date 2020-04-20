import React, { useState } from 'react';
import './Trending.scss';
import * as TouitAPI from '../api/TouitAPI';

const _TREND_MAX_LGT_WORDS_ = 5;
const _TREND_MAX_NBR_WORDS_ = 5;

const Trending = (props) => {
	return (
		<footer className="trending">
			<h2 className="trending-header">
				Trending
			</h2>
			<section className="trending-section">
				<h3>
					Most used words
				</h3>
				<ul>
					{props.trending ? Object.entries(props.trending).filter(e => e[0].length >= _TREND_MAX_LGT_WORDS_).sort((a,b) => b[1] - a[1]).slice(0, _TREND_MAX_NBR_WORDS_).map((m, i) => <li>{m[0] + ' (' + m[1] + ')'}</li>) : 'Undefined'}
				</ul>
			</section>
			<section className="trending-section">
				<h3>
					Most liked Touits
				</h3>
					{props.listTouits ? props.listTouits.messages.slice().sort((a,b) => b.likes - a.likes).slice(0, _TREND_MAX_NBR_WORDS_).map((m, i) => <li>{m.id + ' (' + m.likes + ')'}</li>) : "Undefined"}
			</section>
			<section className="trending-section">
				<h3>
					Most commented Touits
				</h3>
					{props.listTouits ? props.listTouits.messages.slice().sort((a,b) => b.comments_count - a.comments_count).slice(0, _TREND_MAX_NBR_WORDS_).map((m, i) => <li>{m.id + ' (' + m.comments_count + ')'}</li>) : "Undefined"}
			</section>
			<section className="trending-section">
				<h3>
					Most active authors
				</h3>
			</section>
		</footer>
	);
}

export default Trending;
