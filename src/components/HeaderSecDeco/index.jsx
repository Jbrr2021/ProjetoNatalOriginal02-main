import React from 'react';
import { Link } from 'react-router-dom';
// import './HeaderSec.css';

function HeaderSecDeco() {
  return (
    <nav>
    {/* <Link to="/"> Home </Link>  */}
    <Link  to="/Decoracao"> Todos </Link>
    <Link  to="/Decoracao/DecoracaoBolas"> Bolas </Link>
    <Link  to="/Decoracao/DecoracaoGuilandas"> Guilandas </Link>
    <Link  to="/Decoracao/DecoracaoPresepio"> Presepio </Link>
</nav>
  );
}

export default HeaderSecDeco;
