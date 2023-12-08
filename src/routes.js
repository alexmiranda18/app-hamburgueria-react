import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/containers/Home'
import Order from '../src/containers/order'

function myRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/order' element={<Order /> } />
            </Routes>




        </Router>
    )
}

export default myRoutes