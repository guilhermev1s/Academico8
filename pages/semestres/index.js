import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillPencilFill } from 'react-icons/bs'

const index = () => {

    const [semestres, setSemestres] = useState([])

    useEffect(() => {
        setSemestres(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('semestres')) || []
    }
    function excluir(i) {
        if (confirm("Deseja realmente excluir o registro?")) {
            const itens = getAll()
            itens.splice(i, 1)
            window.localStorage.setItem('semestres', JSON.stringify(itens))
            setSemestres(itens)
        }
    }

    function excluir(id) {

        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/disciplinas/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="Semestres">

            <Link href="/semestres/formsem" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data Início</th>
                        <th>Data fim</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {semestres.map((semestres, index) => (
                        <tr key={index}>
                            <td>{semestres.dataInicio}</td>
                            <td>{semestres.dataFim}</td>
                            <td>
                            <BsTrashFill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        <Link href={'/semestres/' + index}>
                            <BsFillPencilFill /> 
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