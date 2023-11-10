import { Link } from 'react-router-dom';
// import './HeaderSecEnfeites.css';


// Cards

function HeaderSecEnfeites() {
    return (
        <nav>
        {/* <Link to="/"> Home </Link>  */}
        <Link  to="/enfeites"> Todos </Link>
        <Link  to="/enfeites/EnfeitesArtesanato"> Artesanato </Link>
        <Link  to="/enfeites/EnfeitesBoneco"> Boneco </Link>
        <Link  to="/enfeites/EnfeitesMeias"> Meias </Link>
        
        

    </nav>
    );
}

export default HeaderSecEnfeites;
