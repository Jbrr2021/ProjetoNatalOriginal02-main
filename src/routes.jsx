import { BrowserRouter, Route, Routes } from "react-router-dom";
// mapeamento das páginas

//Paginas Principais
import Home from "./pages/Home";
import Decoracao from "./pages/Decoracao";
import Iluminacao from "./pages/Iluminacao";
import Enfeites from "./pages/Enfeites";

//Decoração
import DecoracaoBolas from "./pages/DecoracaoBolas";
import DecoracaoGuilandas from "./pages/DecoracaoGuilandas";
import DecoracaoPresepio from "./pages/DecoracaoPresepio";

//Iluminacação
//é o mesmo da iluminacao so tem uma pagina

//Enfeites
import EnfeitesArtesanato from "./pages/EnfeitesArtesanato";
import EnfeitesMeias from "./pages/EnfeitesMeias";
import EnfeitesBoneco from "./pages/EnfeitesBoneco";
//carinho
import Carrinho from "./pages/Carrinho/carrinho";
import GetApi from "./pages/Carrinho/GetApi";
//import FinalizarCompra from "./pages/Carrinho/FinalizarCompra";




function AppRoutes()
{
	return(
	<BrowserRouter>
        <Routes>
            {/* Menu Principal */}
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/decoracao" element={ <Decoracao/> }></Route>
            <Route path="/iluminacao" element={ <Iluminacao /> }></Route>
            <Route path="/enfeites" element={ <Enfeites /> }></Route>
            <Route path="/carrinho" element={<Carrinho />}></Route>

            {/* Decoração */}
            <Route path="/Decoracao/DecoracaoBolas" element={ <DecoracaoBolas /> }></Route>
            <Route path="/Decoracao/DecoracaoGuilandas" element={ <DecoracaoGuilandas /> }></Route>
            <Route path="/Decoracao/DecoracaoPresepio" element={ <DecoracaoPresepio /> }></Route>

            {/* Iluminação */}
            <Route path="/iluminacao" element={ <Iluminacao /> }></Route>

            {/* Enfeites */}
            <Route path="/enfeites/EnfeitesArtesanato" element={ <EnfeitesArtesanato/> }></Route>
            <Route path="/enfeites/EnfeitesMeias" element={ <EnfeitesMeias/> }></Route>
            <Route path="/enfeites/EnfeitesBoneco" element={ <EnfeitesBoneco/> }></Route>

            {/* Rota para lhe dar com diferentes produtos */}
            <Route path="/" element={<GetApi />}></Route>
            <Route path="/carrinho/:id" element={<Carrinho />}></Route>
            {/*oute path="/finalizar-compra" component={FinalizarCompra}/>*/}




            
        </Routes>
	</BrowserRouter>
)
}
export default AppRoutes

// chamar depois no App