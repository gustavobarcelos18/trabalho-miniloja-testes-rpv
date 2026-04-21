import { useState } from 'react'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { Cart } from '../components/Cart/Cart'
import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm'
import { products } from '../data/products'
import { CartItem, CheckoutData } from '../types'

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [submitted, setSubmitted] = useState(false)

  function handleAddToCart(productId: number) {
    const product = products.find((item) => item.id === productId)

    if (!product) {
      return
    }

    const cartCopy = [...cartItems]
    const itemIndex = cartCopy.findIndex((item) => item.product.id === productId)

    if (itemIndex >= 0) {
      cartCopy[itemIndex] = {
        product: cartCopy[itemIndex].product,
        quantity: cartCopy[itemIndex].quantity + 1,
      }
    } else {
      cartCopy.push({
        product: product,
        quantity: 1,
      })
    }

    setCartItems(cartCopy)
  }

  function handleRemove(productId: number) {
    const newCart: CartItem[] = []

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].product.id !== productId) {
        newCart.push(cartItems[i])
      }
    }

    setCartItems(newCart)
  }

  function handleCheckout(data: CheckoutData) {
    console.log('Pedido finalizado:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '520px',
            backgroundColor: '#fffaf5',
            border: '1px solid #e4d5c8',
            borderRadius: '20px',
            boxShadow: '0 14px 32px rgba(84, 53, 40, 0.08)',
            padding: '2.5rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ marginTop: 0, marginBottom: '0.75rem' }}>
            Pedido realizado com sucesso!
          </h1>
          <p style={{ margin: 0, color: '#7a665d', lineHeight: 1.6 }}>
            Seu pedido foi enviado. Obrigado por comprar na Mini Loja.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gap: '1.5rem',
      }}
    >
      <section
        style={{
          backgroundColor: '#fffaf5',
          border: '1px solid #e4d5c8',
          borderRadius: '24px',
          boxShadow: '0 14px 32px rgba(84, 53, 40, 0.08)',
          padding: '2rem',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2.3rem' }}>Mini Loja</h1>
        <p style={{ marginTop: '0.75rem', marginBottom: 0, color: '#7a665d' }}>
          Produtos simples, carrinho organizado e checkout direto ao ponto.
        </p>
      </section>

      <section
        style={{
          backgroundColor: '#fffaf5',
          border: '1px solid #e4d5c8',
          borderRadius: '24px',
          boxShadow: '0 14px 32px rgba(84, 53, 40, 0.08)',
          padding: '2rem',
        }}
      >
        <h2 style={{ marginTop: 0 }}>Produtos</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      <section
        style={{
          backgroundColor: '#fffaf5',
          border: '1px solid #e4d5c8',
          borderRadius: '24px',
          boxShadow: '0 14px 32px rgba(84, 53, 40, 0.08)',
          padding: '2rem',
        }}
      >
        <Cart items={cartItems} onRemove={handleRemove} />
      </section>

      <section
        style={{
          backgroundColor: '#fffaf5',
          border: '1px solid #e4d5c8',
          borderRadius: '24px',
          boxShadow: '0 14px 32px rgba(84, 53, 40, 0.08)',
          padding: '2rem',
        }}
      >
        <h2 style={{ marginTop: 0 }}>Finalizar Compra</h2>
        <CheckoutForm onSubmit={handleCheckout} hasItems={cartItems.length > 0} />
      </section>
    </main>
  )
}
