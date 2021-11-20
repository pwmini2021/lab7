import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Error404Page from "./pages/Error404Page";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"about"} element={<AboutPage/>}/>
            <Route path={"*"} element={<Error404Page/>}/>
        </Routes>
    );
}

export default App;
