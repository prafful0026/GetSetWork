import '../assets/Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home" style={{backgroundImage:'url("/images/background.jpg")'}}>
            <div className="overlay">

            </div>
            <div className="main">
                <Link to="/login">
                    <div className="home-login-btn">Login</div>
                </Link>     
                <span className="head">
                    GetSetWork
                </span>
                <span className="head-desc">
                    Your Freelance Assistant
                </span>
                <div className="home-buttons">
                    <div className="home-btn"><Link to={'/freelancer/register'} >Join as Freelancer</Link></div>
                    <div className="home-btn"><Link to={'/client/register'} >Hire a Freelancer</Link></div>
                </div>

            </div>
        </div>
     );
}
 
export default Home;