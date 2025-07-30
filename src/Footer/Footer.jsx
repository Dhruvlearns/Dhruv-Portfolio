import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Footer(){
    return(
        <div style={{margin:"2em"}}>
            <p style={{ textAlign: "center" }}>
        Crafted with passion by Dhruv Agrawal <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}
            </p>
        </div>
    );
}

export default Footer;