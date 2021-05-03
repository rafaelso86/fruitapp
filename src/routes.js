import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import Fruit from './pages/Fruit';

import { FruitContext } from './context';

export default function Routes() {

    const [nameFruit, setNameFruit] = useState();
    const [photoFruit, setPhotoFruit] = useState();
    const [caloriesFruit, setCaloriesFruit] = useState();
    const [carbohydratesFruit, setCarbohydratesFruit] = useState();
    const [fiberFruit, setFiberFruit] = useState();
    const [portionFruit, setPortionFruit] = useState();
    const [proteinFruit, setProteinFruit] = useState();
    const [blubberFruit, setBlubberFruit] = useState();

    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <FruitContext.Provider
                        value={
                            {
                                nameFruit, setNameFruit,
                                photoFruit, setPhotoFruit,
                                caloriesFruit, setCaloriesFruit,
                                carbohydratesFruit, setCarbohydratesFruit,
                                fiberFruit, setFiberFruit,
                                portionFruit, setPortionFruit,
                                proteinFruit, setProteinFruit,
                                blubberFruit, setBlubberFruit
                            }
                        }>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/fruit">
                            <Fruit />
                        </Route>
                    </FruitContext.Provider>
                </Switch>
            </Router >
        </div>
    )
}
