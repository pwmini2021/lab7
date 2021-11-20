import React from 'react';
import {Car} from "../data/Car";

export interface CarListItemProps {
    car: Car;
}

const CarListItem: React.FC<CarListItemProps> = (props: CarListItemProps) => {
    return (
        <div>
            {props.car.name}
        </div>
    )
}

export default CarListItem;
