import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import UsersPage from '../pages/UsersPage'
import PostsPage from '../pages/PostsPage'
import CategoriesPage from '../pages/CategoriesPage'
import TagsPage from '../pages/TagsPage'
import StatusesPage from '../pages/StatusesPage/StatusesPage'
import RolesPage from '../pages/RolesPage'
import CommentsPage from '../pages/CommentsPage'
import UserProfilePage from '../pages/UserProfilePage'

const Routes = () => {
    return (
        <Switch>
            <Route path='/nachricht-react-admin/tags' component={TagsPage}/>
            <Route path='/nachricht-react-admin/users' component={UsersPage}/>
            <Route path='/nachricht-react-admin/posts' component={PostsPage}/>
            <Route path='/nachricht-react-admin/roles' component={RolesPage}/>
            <Route path='/nachricht-react-admin/' exact component={Dashboard}/>
            <Route path='/nachricht-react-admin/statuses' component={StatusesPage}/>
            <Route path='/nachricht-react-admin/comments' component={CommentsPage}/>
            <Route path='/nachricht-react-admin/profile' component={UserProfilePage}/>
            <Route path='/nachricht-react-admin/categories' component={CategoriesPage}/>
        </Switch>
    )
}

export default Routes
