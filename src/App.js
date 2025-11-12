import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Categoria from './componentes/Categoria/Categoria';
import Rodape from './componentes/Rodape/Rodape';
import { v4 as uuidv4 } from 'uuid';
import "./App.css"

function App() {

  const [listaCategoria, setListaCategorias] = useState ([
      {
        id: uuidv4(),
        nome: 'Terror',
        corPrimaria: '#8FC78C',
      },
      {
        id: uuidv4(),
        nome: 'Comedia',
        corPrimaria: '#C4435C',
      },
      {
        id: uuidv4(),
        nome: 'Drama',
        corPrimaria: '#FB9D5D',
      },
      {
        id: uuidv4(),
        nome: 'Suspense',
        corPrimaria: '#A05FB6',
      },
      {
        id: uuidv4(),
        nome: 'Ficção científica',
        corPrimaria: '#7A96F6',
      },
      {
        id: uuidv4(),
        nome: 'Biografia',
        corPrimaria: '#9E8BC6',
      },
      {
        id: uuidv4(),
        nome: 'Contos',
        corPrimaria: '#E6C96A',
      },
      {
        id: uuidv4(),
        nome: 'Fantasia',
        corPrimaria: '#E6A4B4',
      }
   ])

  const [livros, setLivros] = useState([])

  const cadastrarLivro = (livro) => {
    console.log(livro)
    setLivros([...livros, livro])
  }

  const cadastrarCategoria = (categoria) => {
    console.log(categoria)
    setListaCategorias([...listaCategoria, categoria])
  }

  function deletarLivro(id){
      setLivros(livros.filter(livro => livro.id != id))
      console.log("deletando livro: ", id);
  }

  function favoritar(id) {
      let novaLista = []
      livros.forEach(livro => {
      if(livro.id === id) livro.favorito = !livro.favorito;
      novaLista.push(livro)  
    }) 
    console.log(novaLista) 
    setLivros(novaLista)
    
  }

  const altCorCategoria = (cor, id) => {
  setListaCategorias(listaCategoria.map(categoria => {
      if (categoria.id === id) {
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
        cadastroLivro = {livro => cadastrarLivro(livro)}
        cadastroCategoria = {categoria => cadastrarCategoria(categoria)}
      />
      <section className='categorias'>
        {livros.length > 0 && <h1>Minha organização</h1>}
        {listaCategoria.map(categoria =>
          <Categoria 
              //O react exige uma key unica para cada child, nesse caso, o nome
              key={categoria.nome}
              id={categoria.id}
              nome={categoria.nome} 
              altCor={altCorCategoria}
              corCard={categoria.corPrimaria} 
              livros={livros.filter(livro => livro.categoria === categoria.nome)}
              aoDeletar= {deletarLivro}
              aoFavoritar={favoritar}
          />
        )}
      </section>
      <Rodape/>
    </div>
  );
}

export default App;
