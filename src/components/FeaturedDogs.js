import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Image4 from "../img/a-z-breeds4.jpg";
import Image1 from "../img/a-z-breeds.jpg";
import Image2 from "../img/a-z-breeds2.png"
import Image3 from "../img/a-z-breeds3.png";
import { Carousel } from "react-bootstrap";

const FeaturedDogs = () => {
    let [filteredDogs1, setDogs1] = useState([]);
    let [filteredDogs2, setDogs2] = useState([]);
    let [filteredDogs3, setDogs3] = useState([]);
    // Featured dog 1
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
            setDogs1(data1);
        }
        
        dogList1();

    }, []);
    // Featured dog 2
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
            setDogs2(data2);
        }
        
        dogList2();

    }, []);
    // Featured dog 3
    useEffect(()=> {
        let dogList3 = async ()  => {
            let list3 = await fetch('https://api.api-ninjas.com/v1/dogs?name=Siberian Husky',
                {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'JjMIaYF1cDhKC2G3epHZcA==DCmyqyIJt0TSr5v1'
                    }
                }
            );
            if (!list3.ok) {
                throw new Error(`HTTP error! status: ${list3.status}`);
            }
    
            let data3 = await list3.json();
            console.log(data3);
            setDogs3(data3);
        }
        
        dogList3();

    }, []);
    return ( 
        <>
            <div className="container d-flex align-items-center justify-content-center rounded" style={{backgroundColor: "#003594"}} id='selectContainer'>
                <h1 className='m-0' style={{color: "white"}}>Welcome to Pawpedia</h1>
            </div>
            {/* Main Image */}
            <div className="container border border-primary p-0 mt-3">
                <img src={Image4} alt="" className='w-100'/>
            </div>
            {/* Carousel */}
            <div className="container border border-primary mt-3">
                <Carousel>
                    <Carousel.Item className="carouselSize w-100">
                        <img src={Image1} alt="" className="w-100"/>
                        <Carousel.Caption style={{backgroundColor: "#003594"}}>
                        <h3 class>Canine Kingdom</h3>
                        <p> an all-encompassing resource within Pawpedia dedicated to celebrating and exploring the world of dogs.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carouselSize w-100">
                        <img src={Image3} alt="" className="w-100" id="secondImage" />
                        <Carousel.Caption id="secondCaption" style={{backgroundColor: "#003594", marginBottom:"300px"}}>
                        <h3 className="w-100">Puppy Information</h3>
                        <p className="w-100">Puppies are adorable, playful, and curious young dogs that require special care and attention. From birth until they reach adulthood</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carouselSize w-100">
                        <img src={Image2} alt="" className="w-100"/>
                        <Carousel.Caption style={{backgroundColor: "#003594"}}>
                        <h3>All Breeds Around the world!</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* Top Stories */}
            <div className="container mt-5 rounded d-flex align-items-center topStories">
                <h2 className=' rounded text-white '>Featured Dog Breeds</h2>
            </div>
            <div className="container mt-3 mb-5">
                <div className="row g-5">
                    {
                    filteredDogs1.map((data, index)=> 
                    <>
                        <div className="col-md-4 col-12 col-sm-12">
                            <div className="card border border-primary">
                                <img src={data.image_link} alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">Golden Retrievers are friendly, intelligent, and devoted dogs, making them excellent family pets and reliable companions. Known for their love of play and their gentle disposition, they excel in obedience and service roles. Their golden coats and affectionate nature make them one of the most popular breeds worldwide.</p>
                                    <Link to="/wd100-react-mp-2/breed1" className="btn btn-primary" state={index}>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                    }
                    {
                        filteredDogs2.map((data, index)=> 
                        <>
                            <div className="col-md-4 col-12 col-sm-12">
                                <div className="card border border-primary">
                                    <img src={data.image_link} alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">German Shepherds are highly intelligent, courageous, and versatile working dogs. Renowned for their loyalty and confidence, they are often employed in police and military roles. They are protective and form strong bonds with their families, making them both excellent guardians and companions. <br /><br />
                                        </p>
                                        <Link to="/wd100-react-mp-2/breed2" className="btn btn-primary" state={index}>
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    }
                    {
                        filteredDogs3.map((data, index)=> 
                        <>
                            <div className="col-md-4 col-12 col-sm-12">
                                <div className="card border border-primary">
                                    <img src={data.image_link} alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">Siberian Huskies are energetic, friendly, and known for their striking blue or multi-colored eyes and distinctive coat. Originally bred as sled dogs, they have excellent endurance and a playful nature. They are social and good-natured, making them great family pets, though they require plenty of exercise and mental stimulation.</p>
                                        <Link to="/wd100-react-mp-2/breed3" className="btn btn-primary" state={index}>
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    }
                </div>
            </div>
            
        </>
     );
}
 
export default FeaturedDogs;