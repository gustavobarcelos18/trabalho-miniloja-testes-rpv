import { Product } from '../../types'

interface ProductCardProps {
  product: Product
  onAddToCart: (id: number) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const price = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleAdd() {
    onAddToCart(product.id)
  }

  return (
    <article
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #eadccf',
        borderRadius: '18px',
        boxShadow: '0 10px 24px rgba(84, 53, 40, 0.06)',
        padding: '1rem',
        display: 'grid',
        gap: '0.75rem',
        height: '100%',
      }}
    >
      <div
        style={{
          height: '170px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #f5e8dc 0%, #ead6c7 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img src={product.image} alt={product.name} style={{ maxHeight: '110px' }} />
      </div>

      <span
        style={{
          width: 'fit-content',
          backgroundColor: '#f3e3d7',
          color: '#8c5a43',
          borderRadius: '999px',
          padding: '0.3rem 0.7rem',
          fontSize: '0.82rem',
          fontWeight: 700,
        }}
      >
        {product.category}
      </span>

      <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{product.name}</h2>
      <p style={{ margin: 0, color: '#6f5d55', lineHeight: 1.5 }}>
        {product.description}
      </p>
      <p style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700 }}>{price}</p>

      {!product.inStock && (
        <span
          style={{
            width: 'fit-content',
            color: '#a63f3f',
            backgroundColor: '#f9e0e0',
            borderRadius: '999px',
            padding: '0.3rem 0.7rem',
            fontSize: '0.82rem',
            fontWeight: 700,
          }}
        >
          Esgotado
        </span>
      )}

      <button
        onClick={handleAdd}
        disabled={!product.inStock}
        style={{
          marginTop: 'auto',
          width: '100%',
          border: 'none',
          borderRadius: '12px',
          padding: '0.85rem 1rem',
          backgroundColor: !product.inStock ? '#d8c8bb' : '#b86b4b',
          color: '#fff',
          fontWeight: 700,
          cursor: !product.inStock ? 'not-allowed' : 'pointer',
        }}
      >
        Adicionar ao Carrinho
      </button>
    </article>
  )
}
