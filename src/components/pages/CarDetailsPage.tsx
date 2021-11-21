import React from 'react';
import {useParams} from "react-router-dom";
import Error404Page from "./Error404Page";
import {Car} from "../../data/Car";

export interface CarDetailsPageProps {
    cars: Car[];
}

const CarDetailsPage: React.FC<CarDetailsPageProps> = (props: CarDetailsPageProps) => {
    const {id} = useParams();

    // eslint-disable-next-line eqeqeq
    const car = props.cars.find(car => car.id == id);

    return !car ? <Error404Page/> : (
        <>
            <h3>Car {car.id}</h3>
            <div>Name: {car.name}</div>
        </>
    );
}

export default CarDetailsPage;
