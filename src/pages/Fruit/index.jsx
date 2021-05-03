import React, { useContext } from 'react';
import { FruitContext } from '../../context';
import { Link } from 'react-router-dom';
import iconBack from '../../images/icon-back.png';

import './index.scss';

function Fruit() {

    const {
        nameFruit,
        photoFruit,
        caloriesFruit,
        carbohydratesFruit,
        fiberFruit,
        portionFruit,
        blubberFruit,
        proteinFruit
    } = useContext(FruitContext);

    return (
        <div className="container">
            <div className="fruit-content">
                <img src={photoFruit} alt="" />
                <h2>Fruta: {nameFruit}</h2>
                <span><strong>Calorias:</strong> {caloriesFruit}</span>
                <span><strong>Carboidratos:</strong> {carbohydratesFruit}</span>
                <span><strong>Fibras:</strong> {fiberFruit}</span>
                <span><strong>Porção:</strong> {portionFruit}</span>
                <span><strong>Proteína:</strong> {proteinFruit}</span>
                <span><strong>Gordura:</strong> {blubberFruit}</span>

                <Link to="/" className="btn-back">
                    <img src={iconBack} alt="Voltar" />
                </Link>
            </div>
        </div>
    )
}

export default Fruit;