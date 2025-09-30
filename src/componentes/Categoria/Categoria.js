import Card from '../Card/Card'
import './Categoria.css'

const Categoria = (props) => {
    
    
    return (
        //Operador condicional - Caso o primeiro parâmetro seja true, retorna o segundo parâmetro
        props.livros.length > 0 &&
        <section className='categoria' style={{backgroundColor: props.corFundo}} >
            <h3 style={{borderColor: props.corCard}}>{props.nome}</h3>
            <div className='livros'>
            {props.livros.map(livro => 
                <Card 
                    key={livro.titulo}
                    titulo={livro.titulo} 
                    autor={livro.autor}
                    imagem={livro.imagem}
                    ano={livro.ano}
                    editora={livro.editora}
                    corCard={props.corCard}
                />
              )
            }
            </div>
        </section>
    )
}

export default Categoria