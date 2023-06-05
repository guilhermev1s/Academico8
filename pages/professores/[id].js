import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const id = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            const professores = JSON.parse(window.localStorage.getItem('professores'))
            const disciplina = professores[query.id]
            for (let campo in disciplina) {
                setValue(campo, disciplina[campo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const professores = JSON.parse(window.localStorage.getItem('professores')) || []
        professores.splice(query.id, 1, dados)
        window.localStorage.setItem('professores', JSON.stringify(professores))
        push("/professores")
    }

    return (
        <Pagina titulo="Professores">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control type="text" {...register('cpf')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matrícula</Form.Label>
                    <Form.Control type="text" {...register('matricula')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salário</Form.Label>
                    <Form.Control type="number"{...register('salario')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" {...register('email')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="tel" {...register('telefone')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="number" {...register('cep')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control type="text" {...register('logradouro')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control type="text" {...register('complemento')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero</Form.Label>
                    <Form.Control type="text" {...register('numero')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="text" {...register('bairro')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/professores">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default id

