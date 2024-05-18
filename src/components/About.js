import Image1 from "../img/about1.png";
import Image2 from "../img/about2.png";
import Image3 from "../img/about3.png";

const AboutUs = () => {
    return ( 
        <>
            <div className="container text-center mb-3" style={{backgroundColor:"#003594"}}>
                <div className="row pt-5 text-center">
                    <div className="col-12">
                        <img src={Image3} alt="" className="w-75" style={{margin: "auto"}}/>
                    </div>
                    <div className="col-12">
                        <h2 className="text-white mt-5" style={{fontSize:"50px"}}>About Us / What We Do</h2>
                        <p className="text-white mt-2 p-5" style={{fontSize:"20px"}}>
                        Welcome to Pawpedia!

                        At Pawpedia, we are passionate dog enthusiasts dedicated to providing you with accurate, comprehensive, and engaging information on all dog breeds. Our mission is to be your go-to resource for everything canine, whether you're a seasoned dog owner, a prospective pet parent, or just a lover of dogs. Our team of experts and dog lovers curates detailed breed profiles, training tips, health advice, and much more to help you understand and care for your furry friends better.

                        Join our community to celebrate and explore the wonderful world of dogs with us!

                        Thank you for being a part of Pawpedia!
                        </p>
                    </div>
                    <div className="col-6 p-0">
                        <img src={Image2} alt="" className="w-100"/>
                    </div>
                    <div className="col-6 p-0">
                        <img src={Image1} alt="" className="w-100"/>
                    </div>
                    <div className="col-12 p-0">
                    <h2 className="text-white mb-5" style={{fontSize:"50px"}}>Thank you for visiting us!</h2>
                    </div>
                </div>
            </div>  
        </>
     );
}
 
export default AboutUs;