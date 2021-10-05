/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated, role } from './auth'

const PrivateRoute = props => {
    if (isAuthenticated) {
        if (role() === "kitchen") {
            if (props.path === "/cozinha") {
                return <Route {...props} />

            }
            return <Redirect to="/cozinha" />

        } if (role() === "hall") {
            if (props.path === "/salao") {
                return <Route {...props} />

            } if (props.path === "/salao-pedidos") {
                return <Route {...props} />

            }
            return <Redirect to="/salao" />
        }

    }
    return <Redirect to="/" />
}


export default PrivateRoute