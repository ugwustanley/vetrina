import React from 'react'
import {
    Route,
    Routes as Switch,
  } from "react-router-dom";

//components
import Home from '../pages/Home/Home'
import Layout from '../layout/Layout'


const routes = [{
    path: '/',
    component: Home, 
    guard: false,
}]


const Routes = () => {
    
    return (
        <>
        {routes.map((route, index) => {
            return <Switch key={index}>
               
                       <Route path={route?.path} element={
                           <Layout>
                               <route.component />
                           </Layout>
                       } />
                </Switch> 
               
           
        })}
        </>
    )
 
}

export default Routes

