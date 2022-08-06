
// Author    KMS - Martin Dubois, P. Eng.
// Copyright (C) 2022 KMS
// Product   WebSite3
// File      front-end/src/App.js

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';

import Home    from './pages/Home'
import Layout  from './pages/Layout'
import List    from './pages/List'
import NoPage  from './pages/NoPage'
import Subject from './pages/Subject'

function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = { <Layout /> }>
                <Route element = { <Home /> } index />
                <Route element = { <List />    } path = "List.htm"    />
                <Route element = { <Subject /> } path = "Subject.htm" />
                <Route element = { <NoPage /> } path = "*" />
            </Route>
        </Routes>
    </BrowserRouter> )
}

export default App;
