import { Route, Routes } from "react-router-dom";
import { Home, Login, Feed, Cadastro } from '../pages/index'

const RoutesLink = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </>
    )
}

export default RoutesLink


