// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecEnfeites from '../../components/HeaderSecEnfeites/index.jsx'
import GetApiEA from '../GetApiEA.jsx';

function EnfeitesArtesanato ()
{
    return(
        <>
        <Header />
        <HeaderSecEnfeites/>
        <GetApiEA/>
        <Footer />
        
        </>
    )
}
export default EnfeitesArtesanato