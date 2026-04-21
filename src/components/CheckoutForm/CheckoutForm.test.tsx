import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CheckoutForm } from './CheckoutForm'

/**
 * Exercicio 3 - CheckoutForm
 *
 * Nivel de dificuldade: Misto
 * Alguns casos tem o render() ou parte da interacao prontos.
 * Outros estao completamente em branco.
 *
 * Conceitos praticados:
 *  - getByLabelText / getByRole
 *  - userEvent.type() para preencher campos
 *  - Validacao de formulario (erros)
 *  - toHaveBeenCalledWith() com dados do formulario
 *  - not.toHaveBeenCalled()
 */

describe('CheckoutForm', () => {
  it('renderiza todos os campos do formulario', () => {
    render(<CheckoutForm onSubmit={jest.fn()} />)

    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('CEP')).toBeInTheDocument()
  })

  it('exibe erro quando o nome esta vazio ao tentar submeter', async () => {
    const onSubmit = jest.fn()
    render(<CheckoutForm onSubmit={onSubmit} />)

    await userEvent.click(screen.getByRole('button', { name: /finalizar/i }))

    expect(screen.getByText(/nome .* obrigat.rio/i)).toBeInTheDocument()
  })

  it('exibe erro quando o e-mail e invalido', async () => {
    render(<CheckoutForm onSubmit={jest.fn()} />)

    await userEvent.type(screen.getByLabelText('Nome'), 'Maria')
    await userEvent.type(screen.getByLabelText('E-mail'), 'nao-e-email')
    await userEvent.type(screen.getByLabelText('CEP'), '12345678')
    await userEvent.click(screen.getByRole('button', { name: /finalizar compra/i }))

    expect(screen.getByText(/e-mail inv.lido/i)).toBeInTheDocument()
  })

  it('exibe erro quando o CEP tem menos de 8 digitos', async () => {
    render(<CheckoutForm onSubmit={jest.fn()} />)

    await userEvent.type(screen.getByLabelText('Nome'), 'Maria')
    await userEvent.type(screen.getByLabelText('E-mail'), 'maria@email.com')
    await userEvent.type(screen.getByLabelText('CEP'), '1234')
    await userEvent.click(screen.getByRole('button', { name: /finalizar compra/i }))

    expect(screen.getByText(/cep deve ter 8 d.gitos/i)).toBeInTheDocument()
  })

  it('chama onSubmit com os dados corretos quando o formulario e valido', async () => {
    const onSubmit = jest.fn()

    render(<CheckoutForm onSubmit={onSubmit} />)

    await userEvent.type(screen.getByLabelText('Nome'), 'Maria')
    await userEvent.type(screen.getByLabelText('E-mail'), 'maria@email.com')
    await userEvent.type(screen.getByLabelText('CEP'), '12345678')
    await userEvent.click(screen.getByRole('button', { name: /finalizar compra/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      nome: 'Maria',
      email: 'maria@email.com',
      cep: '12345678',
    })
  })

  it('nao chama onSubmit quando ha erros de validacao', async () => {
    const onSubmit = jest.fn()
    render(<CheckoutForm onSubmit={onSubmit} />)

    await userEvent.click(screen.getByRole('button', { name: /finalizar/i }))

    expect(onSubmit).not.toHaveBeenCalled()
  })
})
