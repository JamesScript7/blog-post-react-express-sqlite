import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Blogs from './Blogs.jsx';

ReactDOM.render(
  <Router history={hashHistory}>

	<Route path="/" component={App}>
		<IndexRoute component={Blogs} />
	</Route>

  </Router>,
  document.getElementById('root')
);
