import Card from '../Card/Card'
import './Categoria.css'

export const listaCategoria = [
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

const Categoria = (props) => {
    
    return (
        //Operador condicional - Caso o primeiro parâmetro seja true, retorna o segundo parâmetro
        props.livros.length > 0 &&
        <section className='categoria' style={{backgroundColor: props.corFundo}} >
            <h3 style={{borderColor: props.corCard}}>{props.nome}</h3>
            <div className='livros'>
                {props.livros.map(livro => {
                        return <Card 
                            key={livro.titulo}
                            titulo={livro.titulo} 
                            autor={livro.autor}
                            imagem={livro.imagem}
                            ano={livro.ano}
                            editora={livro.editora}
                            corCard={props.corCard}
                            aoDeletar={props.aoDeletar}
                        />
                    }
                )}
            </div>
        </section>
    )
}
export default Categoria