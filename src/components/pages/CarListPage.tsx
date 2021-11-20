import React from 'react';
import {Car} from "../data/Car";
import CarListItem from "../carListItems/CarListItem";
import {Link} from "react-router-dom";

export interface CarListPageProps {
    cars: Car[];
}

const CarListPage: React.FC<CarListPageProps> = (props: CarListPageProps) => {
    return (
        <>
            <h3>CarList</h3>
            <Link to={'/cars/new'}>
                <button>Add new</button>
            </Link>
            {props.cars.map((car: Car) => <CarListItem car={car} key={car.id}/>)}
        </>
    );
}

export default CarListPage;
