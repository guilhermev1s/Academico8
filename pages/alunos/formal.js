import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import alunoValidator from '@/validators/alunoValidator'
import { mask } from 'remask'

const formal = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm()

    function salvar(dados) {
        const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
        alunos.unshift(dados)
        window.localStorage.setItem('alunos', JSON.stringify(alunos))
        push("/alunos")
    }
    function handleChange(event) {
      const name = event.target.name
      const valor = event.target.value
      const mascara = event.target.getAttribute('mask')

      setValue(name, mask(valor, mascara));
  }

    return (
        <Pagina titulo="Alunos">
            <Form>
        <Form.Group className="mb-3" controlId="nome">
         <Form.Label>Nome: </Form.Label>
         <Form.Control isInvalid={errors.nome} type="text" {...register('nome', alunoValidator.nome)} />
               {
              errors.nome &&
              <p className='mt-1 text-danger'>{errors.nome.message}</p>
              }
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control mask='999.999.999-99' type="text" 
          {...register('cpf', alunoValidator.cpf)} onChange={handleChange} />
          {
              errors.cpf &&
              <p className='mt-1 text-danger'>{errors.cpf.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control type="text" {...register('matricula', alunoValidator.matricula )} />
          {
              errors.matricula &&
              <p className='mt-1 text-danger'>{errors.matricula.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" {...register('email', alunoValidator.email)} />
          {
              errors.email &&
              <p className='mt-1 text-danger'>{errors.email.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control mask='(99)99999-9999' type="tel" 
          {...register('telefone', alunoValidator.telefone)} onChange={handleChange} />
          {
              errors.telefone &&
              <p className='mt-1 text-danger'>{errors.telefone.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP</Form.Label>
          <Form.Control mask='99.999-999' type="number" 
          {...register('cep', alunoValidator.cep)} onChange={handleChange}/>
          {
              errors.cep &&
              <p className='mt-1 text-danger'>{errors.cep.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control type="text" {...register('logradouro', alunoValidator.logradouro)} />
          {
              errors.logradouro &&
              <p className='mt-1 text-danger'>{errors.logradouro.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento</Form.Label>
          <Form.Control type="text" {...register('complemento', alunoValidator.complemento)} />
          {
              errors.complemento &&
              <p className='mt-1 text-danger'>{errors.complemento.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero</Form.Label>
          <Form.Control type="text" {...register('numero', alunoValidator.numero)} />
          {
              errors.numero &&
              <p className='mt-1 text-danger'>{errors.numero.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" {...register('bairro', alunoValidator.bairro)} />
          {
              errors.bairro &&
              <p className='mt-1 text-danger'>{errors.bairro.message}</p>
          }
        </Form.Group>

        <div className='text-center'>
        <Button variant="success" onClick={handleSubmit(salvar)}>
          <BsCheckLg className="me-2" />
            Salvar
        </Button>
        <Link className="ms-2 btn btn-danger" href="/alunos">
          <AiOutlineArrowLeft className="me-2" />
           Voltar
        </Link>
        </div>
        </Form>
        </Pagina>
    )
}

export default formal