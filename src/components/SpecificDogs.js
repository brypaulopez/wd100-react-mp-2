import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

const SpecificDogs = (props) => {
    let location = useLocation();
    let data = Number(location.state)
    let name = ' '
    console.log();
    console.log(data);
    let [searchDogs1, resultDogs1] = useState([]);
    useEffect(()=> {
        let searchList = async ()  => {
            
            let results = await fetch('https://api.api-ninjas.com/v1/dogs?name=' + name + '&offset=0',
                {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'JjMIaYF1cDhKC2G3epHZcA==DCmyqyIJt0TSr5v1'
                    }
                }
            );
            if (!results.ok) {
                throw new Error(`HTTP error! status: ${results.status}`);
            }
            let searchResults = await results.json();
            console.log(searchResults);
            resultDogs1(searchResults[data]);
        }
        searchList();
    },[]);

    let answer = '';
    let color = ' ';
    let guard = ' ';
    let colorg = ' ';
    
    return ( 
        <>
            <div className="container mt-5">
                <div className="col-md-12">
                    <div className="card">
                        <img src={searchDogs1.image_link} alt="..."  className="card-img-top"/>
                        <div className="card-body">
                        <h1 className="text-dark">{searchDogs1.name}</h1>
                        <hr />
                        {/* <div className="row">
                            <div className="col-md-6 text-center">
                            <h2>Dog Breed's Temparament</h2>
                                <p>Barking: <progress value={searchDogs1.barking} max={5}/></p>
                                <p>Playfullness: <progress value={searchDogs1.playfulness} max={5}/></p>
                                <p>Protectiveness: <progress value={searchDogs1.protectiveness} max={5}/></p>
                                <p>Trainability: <progress value={searchDogs1.trainability} max={5}/></p>
                                <p>Shedding: <progress value={searchDogs1.shedding} max={5}/></p>
                                <p>Coat Length: <progress value={searchDogs1.coat_length} max={5}/></p>
                                <p>Energy: <progress value={searchDogs1.energy} max={5}/></p>
                                <p>Drooling: <progress value={searchDogs1.drooling} max={5}/></p>
                                <p>Grooming: <progress value={searchDogs1.grooming} max={5}/></p>
                            <h2 className="mt-5">Great Guard Dog?: <span className={`text-${colorg}`}>{guard}</span></h2>
                            </div>
                            <div className="col-md-6 text-center">
                            <h2>Great Family Dog?: <span className={`text-${color}`}>{answer}</span></h2>
                                <p>Good with Children? <progress value={searchDogs1.good_with_children} max={5}/></p>
                                <p>Good with other Dogs? <progress value={searchDogs1.good_with_other_dogs} max={5}/></p>
                                <p>Good with Strangers? <progress value={searchDogs1.good_with_strangers} max={5}/></p>
                                <p>Max Height for Male: {`${searchDogs1.max_height_male} inches`}</p>
                                <p>Max Height for Female: {`${searchDogs1.max_height_female} inches`}</p>
                                <p>Min Height for Male: {`${searchDogs1.min_height_male} inches`}</p>
                                <p>Min Height for Female: {`${searchDogs1.min_height_female} inches`}</p>
                                <p>Max Weight for Male: {`${searchDogs1.max_weight_male} kg`}</p>
                                <p>Max Weight for Female: {`${searchDogs1.max_weight_female} kg`}</p>
                                <p>Min Weight for Male: {`${searchDogs1.min_weight_male} kg`}</p>
                                <p>Min Weight for Female: {`${searchDogs1.min_weight_female} kg`}</p>
                                <p>Max life expectancy: {`${searchDogs1.max_life_expectancy} years`}</p>
                            </div>
                        </div> */}
                        <br />
                        <Link to="/search" className="btn btn-primary">Go back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SpecificDogs;