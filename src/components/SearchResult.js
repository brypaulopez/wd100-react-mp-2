import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchResult = () => {
    // let name = document.getElementById('searchFilter').value;
    let [searchDogs, resultDogs] = useState([]);
    let [loadDogs, loadingDogs] = useState([]);
    
    useEffect(()=> {
        let searchList = async ()  => {
            var name = ' '
            var num = 0
            let result = await fetch('https://api.api-ninjas.com/v1/dogs?name=' + name + '&offset=' + num,
                {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'JjMIaYF1cDhKC2G3epHZcA==DCmyqyIJt0TSr5v1'
                    }
                }
            );
            if (!result.ok) {
                throw new Error(`HTTP error! status: ${result.status}`);
            }
            let searchResult = await result.json();
            console.log(searchResult);
            resultDogs(searchResult);
        }
        searchList();
    },[]);

        let searchList1 = async (numAdd)  => {
        var name = ' '
        var num = numAdd
        console.log(name);
        let result1 = await fetch('https://api.api-ninjas.com/v1/dogs?name=' + name + '&offset=' + num,
            {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'JjMIaYF1cDhKC2G3epHZcA==DCmyqyIJt0TSr5v1'
                }
            }
        );
        if (!result1.ok) {
            throw new Error(`HTTP error! status: ${result1.status}`);
        }
        let searchResult1 = await result1.json();
        console.log(searchResult1);
        resultDogs(searchResult1);
    }
    // const filteredDogs = filterDatabyName(name);
    // console.log(filteredDogs);
        return ( 
            <>
                <div className="container mt-5" id="searchResult">
                    <div className="row text-center">
                        <Form className="d-flex">
                        <Form.Control
                            id='searchFilter'
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </div>
                    <div className="row g-2 text-center mt-2">
                        <div className="col-1"><Link onClick={()=> searchList1(0)}>A</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(19)}>B</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(48)}>C</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(69)}>D</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(78)}>E</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(84)}>F</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(90)}>G</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(104)}>H</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(105)}>I</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(113)}>J</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(117)}>K</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(121)}>L</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(127)}>M</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(134)}>N</Link></div>
                        <div className="col-1">O</div>
                        <div className="col-1">P</div>
                        <div className="col-1">Q</div>
                        <div className="col-1">R</div>
                        <div className="col-1">S</div>
                        <div className="col-1">T</div>
                        <div className="col-1">U</div>
                        <div className="col-1">V</div>
                        <div className="col-1">W</div>
                        <div className="col-1">X</div>
                        <div className="col-1">Y</div>
                        <div className="col-1">Z</div>
                    </div>
                    <div className="row g-5 mt-3">
                    {
                        searchDogs.map((data, index) =>
                        <>
                        <div className="col-md-3 col-12 col-sm-6">
                            <div className="card">
                                <img src={data.image_link} alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <Link to="/specific" className="btn btn-primary" img={data.image_link} state={index} name={data.name}>
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
 
export default SearchResult;