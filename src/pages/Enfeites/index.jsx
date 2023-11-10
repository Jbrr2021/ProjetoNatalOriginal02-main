// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecEnfeites from '../../components/HeaderSecEnfeites/index.jsx'
import GetApiEA from '../GetApiEA.jsx';
import GetApiEB from '../GetApiEB';
import GetApiEM from '../GetApiEM';




function Enfeites ()
{
    return(
        <>
        <Header />
        <HeaderSecEnfeites/>
        <GetApiEA/>
        <GetApiEB/>
        <GetApiEM/>
        <Footer />
        </>
    )
}
export default Enfeites