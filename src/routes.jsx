import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App.js';
import Blogs from './Blogs.jsx';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={App}>
			<IndexRoute component={Blogs} />
		</Route>
	</Router>
);

export default Routes;