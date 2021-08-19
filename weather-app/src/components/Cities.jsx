import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import StateData from '../state-data.json'


function Cities({ match }) {


    const [cities, setCities] = useState(StateData)

    //filtering out JSON to get only the cities within the state user clicked on
    let newCities = cities.filter(item => item.name == match.params.id)[0].city

    return (
            <section>
                {newCities.map(location => {
                  
                    return (
                        
                    <Link to={`/states/cities/${location}`} key={location}>
                            <div>
                                <span>{location}</span>
                            </div>
                    </Link>
                    )
                })}
            </section> 
    );
}

export default Cities;