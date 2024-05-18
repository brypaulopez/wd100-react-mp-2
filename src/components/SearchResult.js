import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchResult = () => {
    let [searchDogs, resultDogs] = useState([]);
    // FOR DEFAULT
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
    // FOR A - Z
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
    // FOR SEARCH AND FILTER
    let searchListFilter = () => {
        let searchName = document.getElementById('searchFilter').value; // for input value once user enter any text
        let searchList2 = async (searchName)  => {
            var name = searchName
            let result1 = await fetch('https://api.api-ninjas.com/v1/dogs?name=' + name,
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
            let searchResultFilter = await result1.json();
            console.log(searchResultFilter);
            resultDogs(searchResultFilter);
    }
    searchList2(searchName);
    }
        return ( 
            <>
                <div className="container mt-5 mb-5" id="searchResult">
                    <div className="row text-center">
                        <Form className="d-flex">
                        <Form.Control
                            id='searchFilter'
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                            <Button variant="outline-primary" onClick={() => searchListFilter()}>Search</Button>
                        </Form>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col-1"><Link onClick={()=> searchList1(0)}>A</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(20)}>B</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(48)}>C</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(69)}>D/E/F</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(89)}>F/I</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(109)}>I/J/K/L/M</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(129)}>M/N/O/P</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(149)}>P/R</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(169)}>S</Link></div>
                        <div className="col-1"><Link onClick={()=> searchList1(200)}>T/V/W/Y</Link></div>
                    </div>
                    <div className="row g-5 mt-3">
                    {
                        searchDogs.map((data) =>
                        <>
                        <div className="col-md-3 col-12 col-sm-6">
                            <div className="card">
                                <img src={data.image_link} alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <Link to="/Specific" className="btn btn-primary" state={data.name}>
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