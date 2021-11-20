import React, {FormEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";

export interface CreateCarPageProps {
    createCar: (carName: string) => void;
}

const CreateCarPage: React.FC<CreateCarPageProps> = (props: CreateCarPageProps) => {
    const [carName, setCarName] = useState('');
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCarName(event.target.value);
    }

    const saveCar = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.createCar(carName);
        setCarName("");
        navigate('/cars');
    }

    return (
        <div>
            <h3>Create car</h3>
            Car name:
            <form onSubmit={saveCar}>
                <input value={carName} onChange={handleChange}/>
                <button>Save</button>
            </form>
        </div>
    )
}

export default CreateCarPage;
