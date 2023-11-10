// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecDeco from '../../components/HeaderSecDeco'

import GetApiDG from '../GetApiDG';
// import GetApiDB from '../GetApiDB';

function DecoracaoGuilandas ()
{
    return(
        <>
        <Header />
     <HeaderSecDeco/> 
       
         <GetApiDG/> 
        <Footer />
        </>
    )
}
export default DecoracaoGuilandas