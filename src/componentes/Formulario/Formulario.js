import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'

const Formulario = (props) => {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [editora, setEditora] = useState('');
    const [ano, setAno] = useState('');
    const [imagem, setImagem] = useState('');
    const [categoria, setCategoria] = useState('');

    const valorAlt = (setState) => (valor) => {
        setState(valor);
    };

    const submit = (evento) => {
        evento.preventDefault()
        props.registro({
            titulo,
            autor,
            editora,
            ano,
            imagem,
            categoria
        })
        setTitulo("");
        setAutor("");
        setEditora("");
        setAno("");
        setImagem("");
        setCategoria("");
        console.log('Form foi submetido ')
    }

    return (

        <section className='formulario'>
            <form onSubmit={submit}>
                <h2>Preencha os dados para criar o card do livro</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Título" 
                    placeholder= "título do livro"
                    valor={titulo}
                    valorAlt = {valorAlt(setTitulo)}
                />
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Autor" 
                    placeholder= "nome do autor"
                    valor={autor}
                    valorAlt = {valorAlt(setAutor)}
                />
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Editora" 
                    placeholder= "nome da editora"
                    valor={editora}
                    valorAlt = {valorAlt(setEditora)}
                />
                <CampoTexto 
                    label="Ano de publicação" 
                    placeholder= "ano de publicação"
                    valor={ano}
                    valorAlt = {valorAlt(setAno)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder= "link da imagem"
                    valor={imagem}
                    valorAlt = {valorAlt(setImagem)}
                />
                <ListaSuspensa 
                    obrigatorio = {true}
                    label= "Categoria" 
                    itens={props.listaCategorias}
                    valor={categoria}
                    valorAlt = {valorAlt(setCategoria)}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>

    )
}

export default Formulario