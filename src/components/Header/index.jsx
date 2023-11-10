import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
//import produto from './produto'; // Importe seu arquivo JSON

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const results = produto.filter(item => {
            return item.nome.toLowerCase().includes(term.toLowerCase());
        });

        setSearchResults(results);
    }

    return (
        <header className={styles.header}>
            <Link to="/">
                <span>NATAL</span>
            </Link>

            <input
                type="text"
                placeholder="Pesquisar"
                className={styles.searchBar}
                value={searchTerm}
                onChange={handleSearchChange}
            />

            <nav>
                {/* Renderize os resultados da pesquisa */}
                {searchResults.map(item => (
                    <Link key={item.id} to={`/produto/${item.id}`}>
                        {item.nome}
                    </Link>
                ))}
            </nav>
            <nav>
                <Link to="/Decoracao">Decoração</Link>
                <Link to="/Iluminacao">Iluminação</Link>
                <Link to="/enfeites">Enfeites Natalinos</Link>
                
                {/* Substitua a rota para o carrinho pela imagem */}
                <Link to="/carrinho">
                    <img src="public/icons8-carrinho-de-compras-64 (1).png" alt="Carrinho de Compras" />
                </Link>
            </nav>
        </header>
    )
}

export default Header

