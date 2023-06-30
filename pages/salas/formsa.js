import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import salaValidator from '@/validators/salaValidator'

const formsa = () => {

    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
            const alunos = JSON.parse(window.localStorage.getItem('salas')) || []
            alunos.unshift(dados)
            window.localStorage.setItem('salas', JSON.stringify(alunos))
            push("/salas")
        }

    return (
        <Pagina titulo="Salas">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome da sala" {...register('nome', salaValidator.nome)} />
                    {
              errors.nome &&
              <p className='mt-1 text-danger'>{errors.nome.message}</p>
                   }  
                </Form.Group>

                <Form.Group className="mb-3" controlId="capacidade">
                    <Form.Label>Capacidade</Form.Label>
                    <Form.Control type="number" placeholder="Digite a capacidade" {...register('capacidade', salaValidator.capacidade)} />
                    {
              errors.capacidade &&
              <p className='mt-1 text-danger'>{errors.capacidade.message}</p>
          }
                </Form.Group>

                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control type="text" placeholder="Digite o tipo" {...register('tipo', salaValidator.tipo)} />
                    {
              errors.tipo &&
              <p className='mt-1 text-danger'>{errors.tipo.message}</p>
          }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/salas">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default formsa