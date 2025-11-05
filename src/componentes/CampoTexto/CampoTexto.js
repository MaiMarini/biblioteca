import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderMod = `Digite o ${props.placeholder}...`
     
    const info = (evento) => {
        props.valorAlt(evento.target.value)
    }

    return (
        <div className= {`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type= {props.type}
                value={props.valor} 
                onChange={info} 
                required={props.obrigatorio} 
                placeholder={placeholderMod}/>
        </div>
    )
}

export default CampoTexto;