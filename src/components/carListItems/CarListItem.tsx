import React from 'react';
import { Link } from 'react-router-dom';
import {Car} from "../data/Car";

export interface CarListItemProps {
    car: Car;
}

const CarListItem: React.FC<CarListItemProps> = (props: CarListItemProps) => {
    return (
        <div>
            {props.car.name}
            <Link to={`/cars/${props.car.id}`}><button>View details</button></Link>
        </div>
    )
}

export default CarListItem;
