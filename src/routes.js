import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import NewPost from './components/new_post';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/new" component={NewPost} />
  </Route>
);