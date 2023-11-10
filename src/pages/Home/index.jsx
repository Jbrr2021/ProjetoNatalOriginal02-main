import React from 'react';
import styles from './Home.module.css';
// Isso aqui é cabeça
import Header from '../../components/Header';
// atenção cada css na pasta senão funciona
import Footer from '../../components/Footer';
import CustomCarousel from '../../components/Carousel';
import CustomCard from '../../components/Card'
import GetApiEA from '../GetApiEA.jsx';




function Home() {
  return (
    <>
      <Header />
      <p />

      <CustomCarousel />
      

      <div className={styles.spacer}></div>
      
      <p className="p1">
  <span className="underline">Os mais vendidos</span>
</p>

      <div className={styles.spacer}></div>
      <GetApiEA/>


      <Footer />
    </>
  );
}

export default Home;
