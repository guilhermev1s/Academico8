import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill } from 'react-icons/bs'

const index = () => {

    const [professores, setProfessores] = useState([])

    useEffect(() => {
        setProfessores(getAll())
    }, [])
    
    function getAll(){
        return JSON.parse(window.localStorage.getItem('professores')) || []
        }
        

function excluir(id){
    
    if (confirm('Deseja realmente excluir o registro?')) {
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('professores', JSON.stringify(itens))
        setProfessores(itens)
    }
}

    return (
        <Pagina titulo="Professores">

            <Link href="/professores/formprof" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Matrícula</th>
                        <th>Salário</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Complemento</th>
                        <th>Numero</th>
                        <th>Bairro</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {professores.map((professores, index) => (
                        <tr key={index}>
                            <td>{professores.nome}</td>
                            <td>{professores.cpf}</td>
                            <td>{professores.matricula}</td>
                            <td>{professores.salario}</td>
                            <td>{professores.email}</td>
                            <td>{professores.telefone}</td>
                            <td>{professores.cep}</td>
                            <td>{professores.logradouro}</td>
                            <td>{professores.complemento}</td>
                            <td>{professores.numero}</td>
                            <td>{professores.bairro}</td>
                            <td>
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(index)} className='text-danger'/>
                                <Link href={'/professores/' + index}>
                                <BsFillTrash3Fill/>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index