import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Categoria from './componentes/Categoria/Categoria';
import {listaCategoria} from './componentes/Categoria/Categoria';
import Rodape from './componentes/Rodape/Rodape';
import "./App.css"

function App() {

  const [livros, setLivros] = useState([])

  const novoRegistro = (livro) => {
    console.log(livro)
    setLivros([...livros, livro])
  }

  function deletarLivro(id){
      
      console.log("deletando livro", id);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario
        listaCategorias={listaCategoria.map(categoria => categoria.nome)}
        registro = {livro => novoRegistro(livro)}
      />
      <section className='categorias'>
        <h1>Minha organização</h1>
        {listaCategoria.map(categoria =>
          <Categoria 
              //O react exige uma key unica para cada child, nesse caso, o nome
              key={categoria.nome} 
              nome={categoria.nome} 
              corCard={categoria.corPrimaria} 
              corFundo={categoria.corSecundaria}
              livros={livros.filter(livro => livro.categoria === categoria.nome)}
              aoDeletar= {deletarLivro}
          />
        )}
      </section>
      <Rodape/>
    </div>
  );
}

export default App;
