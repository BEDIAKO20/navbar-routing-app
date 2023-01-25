import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import Home  from '../Components/Home/Home'

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element ={<Services/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router
