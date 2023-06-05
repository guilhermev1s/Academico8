import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        getAll()
    }, [])
    
    function getAll(){
        return JSON.parse(window.localStorage.getItem('alunos')) || []
    }

function excluir(i){
    
    if (confirm('Deseja realmente excluir o registro?')) {
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('alunos', JSON.stringify(itens))
        setAlunos(itens)
    }
}

    return (
        <Pagina titulo="Alunos">

            <Link href="/alunos/formal" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Matrícula</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Complemento</th>
                        <th>Numero</th>
                        <th>Bairro</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((alunos, index) => (
                        <tr key={index}>
                            <td>{alunos.nome}</td>
                            <td>{alunos.matricula}</td>
                            <td>{alunos.email}</td>
                            <td>{alunos.telefone}</td>
                            <td>{alunos.cep}</td>
                            <td>{alunos.logradouro}</td>
                            <td>{alunos.complemento}</td>
                            <td>{alunos.numero}</td>
                            <td>{alunos.bairro}</td>
                        <BsPencilFill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        <Link href={'/alunos/' + index}>
                        <BsPencilFill /> 
                        </Link>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index