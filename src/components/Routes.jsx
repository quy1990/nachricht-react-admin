import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Users from '../pages/Users'
import Posts from '../pages/Posts'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/users' component={Users}/>
            <Route path='/posts' component={Posts}/>
        </Switch>
    )
}

export default Routes
