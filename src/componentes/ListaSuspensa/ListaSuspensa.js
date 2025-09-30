import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

        const info = (evento) => {
        props.valorAlt(evento.target.value)
    }

    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select onChange={info} required={props.obrigatorio} value={props.valor} >
                <option value="">Selecione...</option>
                    {props.itens.map((item, index) => (
                        <option key = {index}>{item}</option>
                        ))}
            </select>
        </div>
    )
}

export default ListaSuspensa

