import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Error404Page from "./pages/Error404Page";
import Layout from "./Layout";
import CarListPage from "./pages/CarListPage";
import CreateCarPage from "./pages/CreateCarPage";
import {Car, CARS} from "./data/Car";

const App: React.FC = () => {
    const [cars, setCars] = useState(CARS);

    const addCar = (carName: string) => {
        const maxId = Math.max(...cars.map(car => parseInt(car.id + "")))
        const newCar: Car = {
            id: maxId + 1,
            name: carName,
            AC: false,
            doors: 0,
            image: "",
            pricePerDay: 0,
            seats: 0
        }

        setCars([...cars, newCar]);
    }

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"cars"} element={<CarListPage cars={cars}/>}/>
                <Route path={"cars/new"} element={<CreateCarPage createCar={addCar}/>}/>
                <Route path={"about"} element={<AboutPage/>}/>
                <Route path={"*"} element={<Error404Page/>}/>
            </Route>
        </Routes>
    );
}

export default App;
