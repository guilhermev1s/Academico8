import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {
    const [salas, setSalas] = useState([])

    useEffect(() => {
        setSalas(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('salas')) || []
    }
    function excluir(i) {
        if (confirm("Deseja realmente excluir o registro?")) {
            const itens = getAll()
            itens.splice(i, 1)
            window.localStorage.setItem('salas', JSON.stringify(itens))
            setSalas(itens)
        }
    }

    return (
        <Pagina titulo="Salas">

            <Link href="/salas/formsa" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Capacidade</th>
                        <th>Tipo</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {salas.map((salas, index) => (
                        <tr key={index}>
                            <td>{salas.nome}</td>
                            <td>{salas.capacidade}</td>
                            <td>{salas.tipo}</td>
                            <td>
                            <BsFillTrash3Fill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        <Link href={'/salas/' + index}>
                            <BsPencilFill /> 
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