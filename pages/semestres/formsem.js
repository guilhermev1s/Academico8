import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'


const formsem = () => {

    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
        semestres.unshift(dados)
        window.localStorage.setItem('semestres', JSON.stringify(semestres))
        push("/semestres")
    }

    return (
        <Pagina titulo="Semestres">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do semestre" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Data de início</Form.Label>
          <Form.Control type="date" {...register('dataInicio')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Data de fim</Form.Label>
          <Form.Control type="date" {...register('dataFim')}  />
        </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/semestres">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default formsem