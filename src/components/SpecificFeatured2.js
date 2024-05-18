import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

const SpecificFeatured2 = () => {
    let location = useLocation();
    let data = Number(location.state);

    let [filteredDogs2, setDogs2] = useState([]);
    useEffect(()=> {
        let dogList2 = async ()  => {

            let list2 = await fetch('https://api.api-ninjas.com/v1/dogs?name=German Shepherd',
                {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'JjMIaYF1cDhKC2G3epHZcA==DCmyqyIJt0TSr5v1'
                    }
                }
            );
            if (!list2.ok) {
                throw new Error(`HTTP error! status: ${list2.status}`);
            }
    
            let data2 = await list2.json();
            console.log(data2);
            setDogs2(data2[data]);
        }
        
        dogList2();

    }, []);
    let answer = '';
    let color = ' ';
    let guard = ' ';
    let colorg = ' ';
    if (filteredDogs2.good_with_children >= 4) {
        answer = 'ABSOLUTELY!';
        color = 'primary';
    }
    else if (filteredDogs2.good_with_children = 3) {
        answer = 'Almost there..';
        color = 'warning';
    }
    else {
        answer = 'Unfortunately, no';
        color = 'danger';
    }
    if (filteredDogs2.good_with_strangers > 3) {
        guard = 'NO!';
        colorg = 'danger'
    }
    else {
        guard = 'Made for it!';
        colorg = 'primary'
    }
    console.log(filteredDogs2.good_with_strangers);
    return ( 
        <>
            <div className="container mt-5 mb-5">
                <div className="col-md-12">
                    <div className="card border border-primary">
                        <img src={filteredDogs2.image_link} alt="..."  className="card-img-top"/>
                        <div className="card-body">
                        <h1 className="text-dark">{filteredDogs2.name}</h1>
                        <p>
                        German Shepherds are highly intelligent, courageous, and versatile working dogs. Renowned for their loyalty and confidence, they are often employed in police and military roles. They are protective and form strong bonds with their families, making them both excellent guardians and companions.
                        </p>
                        <hr />
                        <div className="row">
                            <div className="col-md-6 text-center">
                            <h2>Dog Breed's Temparament</h2>
                                <p>Barking: <progress value={filteredDogs2.barking} max={5}/></p>
                                <p>Playfullness: <progress value={filteredDogs2.playfulness} max={5}/></p>
                                <p>Protectiveness: <progress value={filteredDogs2.protectiveness} max={5}/></p>
                                <p>Trainability: <progress value={filteredDogs2.trainability} max={5}/></p>
                                <p>Shedding: <progress value={filteredDogs2.shedding} max={5}/></p>
                                <p>Coat Length: <progress value={filteredDogs2.coat_length} max={5}/></p>
                                <p>Energy: <progress value={filteredDogs2.energy} max={5}/></p>
                                <p>Drooling: <progress value={filteredDogs2.drooling} max={5}/></p>
                                <p>Grooming: <progress value={filteredDogs2.grooming} max={5}/></p>
                            <h2 className="mt-5">Great Guard Dog?: <span className={`text-${colorg}`}>{guard}</span></h2>
                            </div>
                            <div className="col-md-6 text-center">
                            <h2>Great Family Dog?: <span className={`text-${color}`}>{answer}</span></h2>
                                <p>Good with Children? <progress value={filteredDogs2.good_with_children} max={5}/></p>
                                <p>Good with other Dogs? <progress value={filteredDogs2.good_with_other_dogs} max={5}/></p>
                                <p>Good with Strangers? <progress value={filteredDogs2.good_with_strangers} max={5}/></p>
                                <p>Max Height for Male: {`${filteredDogs2.max_height_male} inches`}</p>
                                <p>Max Height for Female: {`${filteredDogs2.max_height_female} inches`}</p>
                                <p>Min Height for Male: {`${filteredDogs2.min_height_male} inches`}</p>
                                <p>Min Height for Female: {`${filteredDogs2.min_height_female} inches`}</p>
                                <p>Max Weight for Male: {`${filteredDogs2.max_weight_male} kg`}</p>
                                <p>Max Weight for Female: {`${filteredDogs2.max_weight_female} kg`}</p>
                                <p>Min Weight for Male: {`${filteredDogs2.min_weight_male} kg`}</p>
                                <p>Min Weight for Female: {`${filteredDogs2.min_weight_female} kg`}</p>
                                <p>Max life expectancy: {`${filteredDogs2.max_life_expectancy} years`}</p>
                            </div>
                        </div>
                        <br />
                        <Link to="/wd100-react-mp-2/" className="btn btn-primary">Go back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SpecificFeatured2;