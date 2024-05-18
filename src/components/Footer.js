import { Alert } from "react-bootstrap"
import Logo from "../img/HeaderLogo.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Footer = () => {
    const emailAlert = () => {
        toast('⭐ Thank you for Subscribing!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return ( 
        <>
            
            <div className="container-fluid footer">
            <div className="container">
                <div className="row">
                <div className="col-md-4 mt-5">
                    <h3 className="text-white">Pawpedia</h3>
                    <p className="text-white">Stay in the loop.</p>
                    <form action="">
                        <div className="input-group">
                            <span className="input-group-text bg-dark text-white">Email address:</span>
                            <input type="text" className="form-control"></input>
                            <Link><button className="btn btn-secondary" type="submit" onClick={emailAlert}>Submit</button></Link>
                        </div>
                    </form>
                    <p className="text-white" style={{fontSize: "12px", paddingTop: "5px"}}>By providing your email, you agree to the <span><a href="#">Terms & Conditions</a></span> and <span><a href="#">Privacy Policy</a></span>. You may unsubscribe later.</p>
                    <div className="logo-footer">
                        <img src={Logo} alt="" id="HeaderLogo" />
                    </div>
                </div>
                <div className="col-md-2 col-2nd col-footer">
                    <p className="text-white m-0" style={{fontSize: 12, paddingTop: "100px"}}>Live Chat</p>
                    <div className="row">
                        <div className="col text-white">
                            <i className="fa-regular fa-message"></i>
                            <a href="#" style={{fontSize: "13px"}}>Chat now</a>
                        </div>
                    </div>
                    <p className="text-white" style={{fontSize: "12px", paddingLeft: "20px"}}>Monday - Sunday</p>
                </div>
                <div className="col-md-2 text-white col-footer">
                    <p style={{fontSize: "12px", paddingTop: "100px"}} className="m-0">Need help?</p>
                    <ul style={{paddingLeft: "0px", paddingTop: "20px"}}>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Dog Training</a></li>
                    </ul>
                </div>
                <div className="col-md-2 text-white col-footer">
                    <p style={{fontSize: "12px", paddingTop: "100px"}} className="m-0">About Pawpedia</p>
                    <ul style={{paddingLeft: "0px", paddingTop: "20px"}}>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">About Us/Our Story</a></li>
                        <li><a href="#">P Rewards</a></li>
                        <li><a href="#">P Commmunity</a></li>
                        <li><a href="#">P Blog</a></li>
                        <li><a href="#">P Newsroom</a></li>
                    </ul>
                </div>
                <div className="col-md-2 text-white col-footer">
                    <p style={{fontSize: "12px", paddingTop: "100px"}} className="m-0">Pawpedia Social</p>
                    <ul style={{paddingLeft: "0px", paddingTop: "20px"}} className="social-footer">
                        <li><i className="fa-brands fa-instagram"></i><a href="#">     Instagram</a></li>
                        <li><i className="fa-brands fa-facebook"></i><a href="#">     Facebook</a></li>
                        <li><i className="fa-brands fa-x-twitter"></i><a href="#">     Twitter</a></li>
                        <li><i className="fa-brands fa-youtube"></i><a href="#">     YouTube</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <ToastContainer/>
        </>
     );
}
 
export default Footer;