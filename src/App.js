import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Categoria from './componentes/Categoria/Categoria';
import Rodape from './componentes/Rodape/Rodape';
import "./App.css"

function App() {

  const [listaCategoria, setListaCategorias] = useState ([
      {
        nome: 'Terror',
        corPrimaria: '#8FC78C',
      },
      {
        nome: 'Comedia',
        corPrimaria: '#C4435C',
      },
      {
        nome: 'Drama',
        corPrimaria: '#FB9D5D',
      },
      {
        nome: 'Suspense',
        corPrimaria: '#A05FB6',
      },
      {
        nome: 'Ficção científica',
        corPrimaria: '#7A96F6',
      },
      {
        nome: 'Biografia',
        corPrimaria: '#9E8BC6',
      },
      {
        nome: 'Contos',
        corPrimaria: '#E6C96A',
      },
      {
        nome: 'Fantasia',
        corPrimaria: '#E6A4B4',
      }
   ])

  const [livros, setLivros] = useState([])

  const novoRegistro = (livro) => {
    console.log(livro)
    setLivros([...livros, livro])
  }

  function deletarLivro(id){
      
      console.log("deletando livro", id);
  }

  const altCorCategoria = (cor, nome) => {
  setListaCategorias(listaCategoria.map(categoria => {
      if (categoria.nome === nome) {
        categoria.corPrimaria = cor;
      }
      return categoria;
    })
  );
};

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
              altCor={altCorCategoria}
              corCard={categoria.corPrimaria} 
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
