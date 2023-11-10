// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecEnfeites from '../../components/HeaderSecEnfeites/index.jsx'
import GetApiEB from '../GetApiEB';

function EnfeitesBoneco ()
{
    return(
        <>
        <Header />
        <HeaderSecEnfeites/>
        <GetApiEB/>
        <Footer />
        </>
    )
}
export default EnfeitesBoneco