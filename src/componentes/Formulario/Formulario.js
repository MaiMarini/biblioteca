import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import { v4 as uuidv4 } from 'uuid';
import hexToRgba from 'hex-to-rgba';

const Formulario = (props) => {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [editora, setEditora] = useState('');
    const [ano, setAno] = useState('');
    const [imagem, setImagem] = useState('');
    const [categoria, setCategoria] = useState('');
    const [nome, setNome] = useState('');
    const [corPrimaria, setCor] = useState('');

    const valorAlt = (setState) => (valor) => {
        setState(valor);
    };

    const submitLivro = (evento) => {
        evento.preventDefault()
        props.cadastroLivro({
            id: uuidv4(),
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
        console.log('Form foi submetido ');
    }
    const submitCategoria = (evento) => {
        evento.preventDefault()
        props.cadastroCategoria({
            id: uuidv4(),
            nome,
            corPrimaria,
        })
        setNome("");
        setCor("");
        console.log('Form foi submetido ')
    }

    return (

        <section className='formulario'>
            <form onSubmit={submitLivro}>
                <h2>Preencha os dados para criar o card do livro</h2>
                <CampoTexto 
                    type= "text"
                    obrigatorio = {true} 
                    label="Título" 
                    placeholder= "título do livro"
                    valor={titulo}
                    valorAlt = {valorAlt(setTitulo)}
                />
                <CampoTexto
                    type= "text" 
                    obrigatorio = {true} 
                    label="Autor" 
                    placeholder= "nome do autor"
                    valor={autor}
                    valorAlt = {valorAlt(setAutor)}
                />
                <CampoTexto 
                    type= "text"
                    obrigatorio = {true} 
                    label="Editora" 
                    placeholder= "nome da editora"
                    valor={editora}
                    valorAlt = {valorAlt(setEditora)}
                />
                <CampoTexto 
                    type= "text"
                    label="Ano de publicação" 
                    placeholder= "ano de publicação"
                    valor={ano}
                    valorAlt = {valorAlt(setAno)}
                />
                <CampoTexto 
                    type= "text"
                    label="Imagem" 
                    placeholder= "link da imagem"
                    valor={imagem}
                    valorAlt = {valorAlt(setImagem)}
                />
                <ListaSuspensa 
                    obrigatorio = {true}
                    type= "text"
                    label= "Categoria" 
                    itens={props.listaCategorias}
                    valor={categoria}
                    valorAlt = {valorAlt(setCategoria)}
                />
                <Botao>Criar card</Botao>
            </form>
        
            <form onSubmit={submitCategoria}>
                <h2>Preencha os dados para criar uma nova categoria</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    type= "text"
                    label="Nome" 
                    placeholder= "nome da nova categoria"
                    valor={nome}
                    valorAlt = {valorAlt(setNome)}
                />
                <div className="campo-cor">
                    <CampoTexto 
                        obrigatorio = {true} 
                        type= "text"
                        label="Cor" 
                        placeholder= "defina uma cor"
                        valor={corPrimaria}
                        valorAlt={(valor) => {
                            const rgba = hexToRgba(valor)
                            setCor(rgba) // salva RGBA no estado
                        }}
                    />
                    <CampoTexto
                        type= "color"
                        label= "Selecione"
                        value={corPrimaria}
                        onChange={(e) => setCor(e.target.value)}

                    />
                </div>
                <Botao>Criar categoria</Botao>
            </form>
        </section>

    )
}

export default Formulario