// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecDeco from '../../components/HeaderSecDeco'
import GetApiDP from '../GetApiDP';


function DecoracaoPresepio ()
{
    return(
        <>
        <Header />
     <HeaderSecDeco/> 
        <GetApiDP/>
        <Footer />
        </>
    )
}
export default DecoracaoPresepio