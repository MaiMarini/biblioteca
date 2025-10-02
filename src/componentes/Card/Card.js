import './Card.css';
import { MdDelete } from "react-icons/md";

const Card = (props) => {

    return (
        <div className='card'>
            <MdDelete size={25} className='deletar' onClick={() => props.aoDeletar(props.titulo)}/>
            <div className='cabecalho' style={{backgroundColor: props.corCard}}>
                <img src={props.imagem} alt={props.titulo}/>
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