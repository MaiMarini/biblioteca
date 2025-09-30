import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
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