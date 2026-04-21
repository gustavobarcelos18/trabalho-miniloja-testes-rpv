import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductCard } from './ProductCard'
import { mockProduct, mockOutOfStockProduct } from '../../data/products'

/**
 * Exercicio 1 - ProductCard
 *
 * Nivel de dificuldade: Intermediario (scaffolding parcial)
 * O render() ja esta feito em alguns casos. Voce escreve as queries e assertions.
 *
 * Conceitos praticados:
 *  - screen.getByRole / screen.getByText
 *  - toBeInTheDocument()
 *  - Assertions negativas (.not.)
 *  - userEvent.click()
 *  - toHaveBeenCalledWith()
 *  - toBeDisabled()
 */

describe('ProductCard', () => {
  it('renderiza o nome do produto', () => {
    render(<ProductCard product={mockProduct} onAddToCart={jest.fn()} />)

    expect(
      screen.getByRole('heading', { name: mockProduct.name })
    ).toBeInTheDocument()
  })

  it('renderiza o preco formatado em reais (R$)', () => {
    render(<ProductCard product={mockProduct} onAddToCart={jest.fn()} />)

    expect(screen.getByText('R$ 49,90')).toBeInTheDocument()
  })

  it('exibe o badge "Esgotado" quando o produto esta fora de estoque', () => {
    render(<ProductCard product={mockOutOfStockProduct} onAddToCart={jest.fn()} />)

    expect(screen.getByText('Esgotado')).toBeInTheDocument()
  })

  it('nao exibe o badge "Esgotado" quando o produto esta em estoque', () => {
    render(<ProductCard product={mockProduct} onAddToCart={jest.fn()} />)

    expect(screen.queryByText('Esgotado')).not.toBeInTheDocument()
  })

  it('chama onAddToCart com o id correto ao clicar no botao', async () => {
    const onAddToCart = jest.fn()
    render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />)

    await userEvent.click(
      screen.getByRole('button', { name: /adicionar ao carrinho/i })
    )

    expect(onAddToCart).toHaveBeenCalledWith(mockProduct.id)
  })

  it('o botao fica desabilitado quando o produto esta fora de estoque', () => {
    render(<ProductCard product={mockOutOfStockProduct} onAddToCart={jest.fn()} />)

    expect(
      screen.getByRole('button', { name: /adicionar ao carrinho/i })
    ).toBeDisabled()
  })
})
