import React from 'react';
import {Link} from "react-router-dom";
import {Car} from "../../data/Car";

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
            {props.cars.map((car: Car) => (
                <div key={car.id}>
                    {car.name}
                    <Link to={`/cars/${car.id}`}>
                        <button>View details</button>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default CarListPage;
