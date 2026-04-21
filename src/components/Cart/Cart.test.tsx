import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Cart } from './Cart'
import { mockCartItems } from '../../data/products'

describe('Cart', () => {
  it('mostra a mensagem de carrinho vazio quando não tem item', () => {
    render(<Cart items={[]} onRemove={jest.fn()} />)

    expect(screen.getByText('Seu carrinho está vazio')).toBeInTheDocument()
  })

  it('renderiza os produtos do carrinho', () => {
    render(<Cart items={mockCartItems} onRemove={jest.fn()} />)

    expect(screen.getByText('Camiseta Básica')).toBeInTheDocument()
    expect(screen.getByText('Tênis Esportivo')).toBeInTheDocument()
  })

  it('mostra o total do carrinho', () => {
    render(<Cart items={mockCartItems} onRemove={jest.fn()} />)

    expect(screen.getByText('Total: R$ 299,70')).toBeInTheDocument()
  })

  it('chama onRemove quando clica em remover', async () => {
    const onRemove = jest.fn()

    render(<Cart items={mockCartItems} onRemove={onRemove} />)

    await userEvent.click(screen.getAllByRole('button', { name: 'Remover' })[0])

    expect(onRemove).toHaveBeenCalledWith(1)
  })

  it('não mostra total quando o carrinho está vazio', () => {
    render(<Cart items={[]} onRemove={jest.fn()} />)

    expect(screen.queryByText(/Total:/)).not.toBeInTheDocument()
  })
})
