import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import Posts from '../pages/Posts'
import Categories from '../pages/Categories'
import Tags from '../pages/Tags'
import Roles from '../pages/Roles'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/users' component={Users}/>
            <Route path='/posts' component={Posts}/>
            <Route path='/categories' component={Categories}/>
            <Route path='/tags' component={Tags}/>
            <Route path='/roles' component={Roles}/>
        </Switch>
    )
}

export default Routes
