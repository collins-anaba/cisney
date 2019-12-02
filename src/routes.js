import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Account from './Components/Account/Account';
import Browse from './Components/Browse/Browse';
import Genre from'./Components/Genre/Genre';
import Movies from './Components/Movies/Movies';
import Register from './Components/Register/Register';
import WatchList from './Components/WatchList/WatchList';
import Search from './Components/Search/Search';

export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/auth/login' exact component={Login}>
        <Route path= '/auth/register' exact component={Register}/>
        <Route path= '/browse' exact component={Browse} />
        <Route path= '/browse/genre/all' exact component={Movies} />
        <Route path= '/browse/play/:id' exact component={Video} />
        <Route path= '/browse/genre/:id' exact component={Genre} />
        <Route path= '/account' exact component={Account} />
        <Route path= '/browse/results/:input' exact component={Search} />
        <Route path= '/browse/watchlist' exact component={WatchList} />
    </Switch>
);