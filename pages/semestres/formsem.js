import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import semestreValidator from '@/validators/semestreValidator'
import { mask } from 'remask'


const formsem = () => {

    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
        semestres.unshift(dados)
        window.localStorage.setItem('semestres', JSON.stringify(semestres))
        push("/semestres")
    }
    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }


    return (
        <Pagina titulo="Semestres">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do semestre" {...register('nome', semestreValidator.nome)} />
          {
              errors.nome &&
              <p className='mt-1 text-danger'>{errors.nome.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Data de início</Form.Label>
          <Form.Control mask='99/99/9999' type="date" 
          {...register('dataInicio', semestreValidator.datainicio)} onChange={handleChange}/>
          {
              errors.datainicio &&
              <p className='mt-1 text-danger'>{errors.datainicio.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Data de fim</Form.Label>
          <Form.Control mask='99/99/9999' type="date" 
          {...register('dataFim', semestreValidator.datafim)} onChange={handleChange} />
          {
              errors.datafim &&
              <p className='mt-1 text-danger'>{errors.datafim.message}</p>
          }
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