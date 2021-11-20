import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Error404Page from "./pages/Error404Page";
import Layout from "./Layout";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"about"} element={<AboutPage/>}/>
                <Route path={"*"} element={<Error404Page/>}/>
            </Route>
        </Routes>
    );
}

export default App;
