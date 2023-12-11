import './HomePage.css';
import imgsrc from '../../assets/home.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HomePage=()=>{

    return(
        <div className="home-page">
        <LazyLoadImage src={imgsrc} alt='video' effect='blur' />
        <h1>Welcome to HackaBay</h1>
        </div>
    );
}
export default HomePage;