import styles from './iluminacao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecIlumi from '../../components/HeaderSecIlumi'
// Tem que importar o link
import GetApiIP from '../GetApiIP';


function Iluminacao ()
{
    return(
        <>
        <Header />
        <HeaderSecIlumi />
        <GetApiIP/>
        <Footer />
        </>
    )
}
export default Iluminacao