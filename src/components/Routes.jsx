import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import UsersPage from '../pages/UsersPage'
import PostsPage from '../pages/PostsPage'
import CategoriesPage from '../pages/CategoriesPage'
import TagsPage from '../pages/TagsPage'
import Statuses from '../pages/StatusesPage'
import RolesPage from '../pages/RolesPage'
import CommentsPage from '../pages/CommentsPage'
import UserProfilePage from '../pages/UserProfilePage'

const Routes = () => {
    return (
        <Switch>
            <Route path='/tags' component={TagsPage}/>
            <Route path='/users' component={UsersPage}/>
            <Route path='/posts' component={PostsPage}/>
            <Route path='/roles' component={RolesPage}/>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/statuses' component={Statuses}/>
            <Route path='/comments' component={CommentsPage}/>
            <Route path='/profile' component={UserProfilePage}/>
            <Route path='/categories' component={CategoriesPage}/>
        </Switch>
    )
}

export default Routes
