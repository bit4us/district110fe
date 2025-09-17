import { Route, Routes } from "react-router-dom"

import Home from '../pages/Home'

import TandC from '../pages/TandC'
import NotFoundPage from '../pages/404'

const AppRouter = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/t&c/' element={<TandC />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
)

export default AppRouter 