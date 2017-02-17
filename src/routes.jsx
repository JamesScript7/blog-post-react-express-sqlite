import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App.js';
import Blogs from './Blogs.jsx';
import NotFound from './NotFound';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={App}>
			<IndexRoute component={Blogs} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
);

export default Routes;