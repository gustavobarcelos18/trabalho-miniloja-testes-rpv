import { CartItem as CartItemType } from '../../types'
import { CartItem } from './CartItem'

interface CartProps {
  items: CartItemType[]
  onRemove: (productId: number) => void
}

export function Cart({ items, onRemove }: CartProps) {
  let total = 0

  for (let i = 0; i < items.length; i++) {
    total += items[i].product.price * items[i].quantity
  }

  const totalText = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  if (items.length === 0) {
    return (
      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px dashed #d9c3b2',
          borderRadius: '18px',
          padding: '1.5rem',
          textAlign: 'center',
          color: '#7a665d',
        }}
      >
        <h2 style={{ marginTop: 0 }}>Carrinho</h2>
        <p style={{ marginBottom: 0 }}>Seu carrinho está vazio</p>
      </div>
    )
  }

  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Carrinho</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', display: 'grid', gap: '0.9rem' }}>
        {items.map((item) => (
          <li key={item.product.id}>
            <CartItem item={item} onRemove={onRemove} />
          </li>
        ))}
      </ul>
      <p
        style={{
          marginTop: '1.5rem',
          marginBottom: 0,
          fontSize: '1.1rem',
          fontWeight: 700,
          textAlign: 'right',
        }}
      >
        Total: {totalText}
      </p>
    </section>
  )
}
