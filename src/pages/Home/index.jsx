import React, { useState, useEffect, useContext } from 'react';
import { FruitContext } from '../../context';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './index.scss';

function Home() {

    const url = window.location.href;

    const {
        setNameFruit,
        setPhotoFruit,
        setCaloriesFruit,
        setCarbohydratesFruit,
        setFiberFruit,
        setPortionFruit,
        setProteinFruit,
        setBlubberFruit
    } = useContext(FruitContext);

    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const listFruit = async () => {
            await axios.get(`${url}api/frutas.json`)
                .then(response => {
                    console.log(response.data);
                    setFruits(response.data);
                })
        }

        listFruit();
    }, [])

    function clickButton(fruit) {
        console.log(fruit);
        setNameFruit(fruit.name);
        setPhotoFruit(fruit.photo);
        setCaloriesFruit(fruit.calories);
        setCarbohydratesFruit(fruit.carbohydrates);
        setFiberFruit(fruit.fiber);
        setProteinFruit(fruit.protein);
        setPortionFruit(fruit.portion);
        setBlubberFruit(fruit.blubber);

    }

    return (
        <div className="container">
            <ul className="list-fruit">
                {fruits.map(fruit =>
                    <li key={fruit.name} className="card-fruit">
                        <img src={fruit.photo} alt={fruit.name} />
                        <div className="content">
                            <h2>{fruit.name}</h2>
                            <Link to="fruit" type="button" onClick={() => clickButton(fruit)}>Valor nutricional</Link>
                        </div>
                    </li>
                )
                }
            </ul>
        </div>
    )
}

export default Home;