import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
      </BrowserRouter>
    </div>
  );
}

export default App;
