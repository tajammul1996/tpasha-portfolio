import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

// Import custom components here
import Home from '../Components/Home';

const AppRouter = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/' component={Home} exact={true}/>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;