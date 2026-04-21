import { CartItem as CartItemType } from '../../types'

interface CartItemProps {
  item: CartItemType
  onRemove: (productId: number) => void
}

export function CartItem(props: CartItemProps) {
  const item = props.item
  const subtotalNumber = item.product.price * item.quantity
  const subtotalText = subtotalNumber.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function removeItem() {
    props.onRemove(item.product.id)
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.6fr 0.7fr 0.9fr auto',
        gap: '0.75rem',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        border: '1px solid #eadccf',
        borderRadius: '16px',
        padding: '1rem',
      }}
    >
      <span style={{ fontWeight: 700 }}>{item.product.name}</span>
      <span style={{ color: '#7a665d', textAlign: 'center' }}>Qtd: {item.quantity}</span>
      <span style={{ textAlign: 'right', fontWeight: 700 }}>{subtotalText}</span>
      <button
        onClick={removeItem}
        style={{
          border: 'none',
          borderRadius: '10px',
          padding: '0.7rem 1rem',
          backgroundColor: '#e7c9b8',
          color: '#7b4634',
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        Remover
      </button>
    </div>
  )
}
