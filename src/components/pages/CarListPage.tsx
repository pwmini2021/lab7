import React, {useState} from 'react';
import {Car, CARS} from "../data/Car";
import CarListItem from "../carListItems/CarListItem";

const CarListPage: React.FC = () => {
    const [cars, setCars] = useState(CARS);

    return (
        <>
            <h3>CarList</h3>
            {cars.map((car: Car) => <CarListItem car={car} key={car.id}/>)}
        </>
    );
}

export default CarListPage;
