import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Auth from '../pages/auth'
import Profile from '../pages/profile'
import News from '../pages/news'
import NotMatch from '../pages/notMatch'
import { Provider } from 'unistore/react';
import { store } from '../store';

const Mainroute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={News} />
                    <Route exact path='/auth' component={Auth} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/news/:category' component={News} />
                    <Route component={NotMatch} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Mainroute;