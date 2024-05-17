import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

const SpecificFeatured1 = () => {
    let location = useLocation();
    let data = Number(location.state);
    let [filteredDogs1, setDogs1] = useState([]);
    useEffect(()=> {
        let dogList1 = async ()  => {

            let list1 = await fetch('https://api.api-ninjas.com/v1/dogs?name=Golden Retriever',
                {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'JjMIaYF1cDhKC2G3epHZcA==DCmyqyIJt0TSr5v1'
                    }
                }
            );
            if (!list1.ok) {
                throw new Error(`HTTP error! status: ${list1.status}`);
            }
    
            let data1 = await list1.json();
            console.log(data1);
            setDogs1(data1[data]);
        }
        
        dogList1();

    }, []);
    let answer = '';
    let color = ' ';
    let guard = ' ';
    let colorg = ' ';
    if (filteredDogs1.good_with_children >= 4) {
        answer = 'ABSOLUTELY!';
        color = 'primary';
    }
    else if (filteredDogs1.good_with_children == 3) {
        answer = 'Half way there..';
        color = 'warning';
    }
    else {
        answer = 'Unfortunately, no';
        color = 'danger';
    }

    if (filteredDogs1.good_with_strangers > 3) {
        guard = 'NO!';
        colorg = 'danger'
    }
    else {
        guard = 'Made for it!';
        colorg = 'primary'
    }
    
    return ( 
        <>
            <div className="container mt-5">
                <div className="col-md-12">
                    <div className="card">
                        <img src={filteredDogs1.image_link} alt="..."  className="card-img-top"/>
                        <div className="card-body">
                        <h1 className="text-dark">{filteredDogs1.name}</h1>
                        <p>Golden Retrievers are friendly, intelligent, and devoted dogs, making them excellent family pets and reliable companions. Known for their love of play and their gentle disposition, they excel in obedience and service roles. Their golden coats and affectionate nature make them one of the most popular breeds worldwide.</p>
                        <hr />
                        <div className="row">
                            <div className="col-md-6 text-center">
                            <h2>Dog Breed's Temparament</h2>
                                <p>Barking: <progress value={filteredDogs1.barking} max={5}/></p>
                                <p>Playfullness: <progress value={filteredDogs1.playfulness} max={5}/></p>
                                <p>Protectiveness: <progress value={filteredDogs1.protectiveness} max={5}/></p>
                                <p>Trainability: <progress value={filteredDogs1.trainability} max={5}/></p>
                                <p>Shedding: <progress value={filteredDogs1.shedding} max={5}/></p>
                                <p>Coat Length: <progress value={filteredDogs1.coat_length} max={5}/></p>
                                <p>Energy: <progress value={filteredDogs1.energy} max={5}/></p>
                                <p>Drooling: <progress value={filteredDogs1.drooling} max={5}/></p>
                                <p>Grooming: <progress value={filteredDogs1.grooming} max={5}/></p>
                            <h2 className="mt-5">Great Guard Dog?: <span className={`text-${colorg}`}>{guard}</span></h2>
                            </div>
                            <div className="col-md-6 text-center">
                            <h2>Great Family Dog?: <span className={`text-${color}`}>{answer}</span></h2>
                                <p>Good with Children? <progress value={filteredDogs1.good_with_children} max={5}/></p>
                                <p>Good with other Dogs? <progress value={filteredDogs1.good_with_other_dogs} max={5}/></p>
                                <p>Good with Strangers? <progress value={filteredDogs1.good_with_strangers} max={5}/></p>
                                <p>Max Height for Male: {`${filteredDogs1.max_height_male} inches`}</p>
                                <p>Max Height for Female: {`${filteredDogs1.max_height_female} inches`}</p>
                                <p>Min Height for Male: {`${filteredDogs1.min_height_male} inches`}</p>
                                <p>Min Height for Female: {`${filteredDogs1.min_height_female} inches`}</p>
                                <p>Max Weight for Male: {`${filteredDogs1.max_weight_male} kg`}</p>
                                <p>Max Weight for Female: {`${filteredDogs1.max_weight_female} kg`}</p>
                                <p>Min Weight for Male: {`${filteredDogs1.min_weight_male} kg`}</p>
                                <p>Min Weight for Female: {`${filteredDogs1.min_weight_female} kg`}</p>
                                <p>Max life expectancy: {`${filteredDogs1.max_life_expectancy} years`}</p>
                            </div>
                        </div>
                        <br />
                        <Link to="/" className="btn btn-primary">Go back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SpecificFeatured1;