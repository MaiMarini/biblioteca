import Card from '../Card/Card'
import './Categoria.css'
import hexToRgba from 'hex-to-rgba';

const Categoria = (props) => {
    
    return (
        //Operador condicional - Caso o primeiro parâmetro seja true, retorna o segundo parâmetro
        props.livros.length > 0 &&
        <section className='categoria' style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.corCard, '0.2')}} >
            <input 
                onChange={evento => props.altCor(evento.target.value, props.nome)} 
                value={props.corCard} 
                type='color' 
                className='input-cor' 
            />
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