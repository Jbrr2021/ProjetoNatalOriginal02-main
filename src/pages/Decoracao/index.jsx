import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecDeco from '../../components/HeaderSecDeco';
// import CustomCard from '../../components/Card'
import GetApiDB from '../GetApiDB';
import GetApiDG from '../GetApiDG';
import GetApiDP from '../GetApiDP';
 import styles from './Decoracao.module.css';



function Decoracao ()
{
    return(
        <>
        <Header />
        <HeaderSecDeco/>
        
        {/* <div className={styles.spacer}></div> */}
        
        <GetApiDP/>
        <GetApiDG/>
        <GetApiDB/>
        <Footer />
        </>
    )
}
export default Decoracao