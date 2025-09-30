import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Categoria from './componentes/Categoria/Categoria';
import Rodape from './componentes/Rodape/Rodape';

function App() {

   const listaCategoria = [
      {
        nome: 'Terror',
        corPrimaria: '#8FC78C',
        corSecundaria: '#E6F9E6'
      },
      {
        nome: 'Comedia',
        corPrimaria: '#C4435C',
        corSecundaria: '#FDE7E8'
      },
      {
        nome: 'Drama',
        corPrimaria: '#FB9D5D',
        corSecundaria: '#FFE4CC'
      },
      {
        nome: 'Suspense',
        corPrimaria: '#A05FB6',
        corSecundaria: '#E0C9EA'
      },
      {
        nome: 'Ficção científica',
        corPrimaria: '#7A96F6',
        corSecundaria: '#B8C6FA'
      },
      {
        nome: 'Biografia',
        corPrimaria: '#9E8BC6',
        corSecundaria: '#D8CFF0'
      },
      {
        nome: 'Contos',
        corPrimaria: '#E6C96A',
        corSecundaria: '#FFF3C9'
      },
      {
        nome: 'Fantasia',
        corPrimaria: '#E6A4B4',
        corSecundaria: '#FAD9E6'
      }
   ]

  const [livros, setLivros] = useState([])

  const novoRegistro = (livro) => {
    console.log(livro)
    setLivros([...livros, livro])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario
        listaCategorias={listaCategoria.map(categoria => categoria.nome)}
        registro = {livro => novoRegistro(livro)}
      />
      {listaCategoria.map(categoria =><Categoria 
      //O react exige uma key unica para cada child, nesse caso, o nome
        key={categoria.nome} 
        nome={categoria.nome} 
        corCard={categoria.corPrimaria} 
        corFundo={categoria.corSecundaria}
        livros={livros.filter(livro => livro.categoria === categoria.nome)}
      />)}
        <Rodape/>
    </div>
  );
}

export default App;
