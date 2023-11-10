// import styles from './Footer.module.css'
import React from 'react';
import './Footer.css';

function Footer()
{
    return(
        // <footer className={styles.footer}>
        //     Feito no curso de FrontEnd - 2023
        // </footer>

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-column">
            <h4>Informações</h4>
            <ul className="footer-links">
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Termos e condições</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-column">
            <h4>Categorias</h4>
            <ul className="footer-links">
              <li><a href="#">Eletrônicos</a></li>
              <li><a href="#">Moda</a></li>
              <li><a href="#">Casa e Jardim</a></li>
              <li><a href="#">Esportes</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-column">
            <h4>Minha Conta</h4>
            <ul className="footer-links">
              <li><a href="#">Meus Pedidos</a></li>
              <li><a href="#">Minha Lista de Desejos</a></li>
              <li><a href="#">Minha Conta</a></li>
              <li><a href="#">Ajuda</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-column">
            <h4>Redes Sociais</h4>
            <ul className="social-links">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center">© 2023 Nome da Empresa. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

   