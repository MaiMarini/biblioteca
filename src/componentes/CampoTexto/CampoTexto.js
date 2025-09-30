import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderMod = `Digite o ${props.placeholder}...`
     
    const info = (evento) => {
        props.valorAlt(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={info} required={props.obrigatorio} placeholder={placeholderMod}/>
        </div>
    )
}

export default CampoTexto;