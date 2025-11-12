import './Card.css';
import { MdDelete } from "react-icons/md";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Card = (props) => {

    function favorito() {
        console.log("Livro favoritado: ", props.id)
        props.aoFavoritar(props.id)

        console.log("Props:", props)
    }

    const botaoFavorito = {
        size: 25,
        color: props.corCard,
        onClick: favorito
    }

    return (
        <div className='card'>
            
            <MdDelete 
                size={25} 
                className='deletar' 
                onClick={() => props.aoDeletar(props.id)}
            />
            <div className='cabecalho' style={{backgroundColor: props.corCard}}>
                <img src={props.imagem} alt={props.titulo}/>
                <div className='favoritar'>
                    {props.favorito
                        ? <GoHeartFill {...botaoFavorito}/>
                        : <GoHeart {...botaoFavorito}/>}
                </div>
            </div>
            <div className='rodape' >
                
                <h4 style={{color: props.corCard}}>{props.titulo}</h4>
                <h5>{props.autor}</h5>
                <h6>{props.editora} - {props.ano}</h6>
            </div>
        </div>
    )
}

export default Card