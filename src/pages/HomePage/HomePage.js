import './HomePage.css';
import imgsrc from '../../assets/home.jpg';

const HomePage=()=>{

    return(
        <div className="home-page">
        <img src={imgsrc} alt='video' />
        </div>
    );
}
export default HomePage;