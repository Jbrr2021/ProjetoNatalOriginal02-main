// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecEnfeites from '../../components/HeaderSecEnfeites/index.jsx'
import GetApiEM from '../GetApiEM';

function EnfeitesMeias ()
{
    return(
        <>
        <Header />
        <HeaderSecEnfeites/>
        <GetApiEM/>
        <Footer />
        </>
    )
}
export default EnfeitesMeias