import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import NewPost from './components/new_post';
import ShowPosts from './components/show_posts.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/new" component={NewPost} />
    //this.props.params.id
    <Route path="posts/:id" component={ShowPosts} />
  </Route>
);
