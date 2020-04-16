import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { MainPage } from './pages/MainPage'
import { CartPage } from './pages/CartPage'
import { DetailPage } from './pages/DetailPage'


export const useRoutes = () =>{
    return (
        <Switch>
            <Route path='/cart' exact>
                <CartPage />
            </Route>
            <Route path='/detail/:id'>
                <DetailPage />
            </Route>
            <Route path='/' exact>
                <MainPage />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}