import { useState } from 'react'
import { CheckoutData } from '../../types'

interface CheckoutFormProps {
  hasItems?: boolean
  onSubmit: (data: CheckoutData) => void
}

interface FormErrors {
  nome?: string
  email?: string
  cep?: string
}

export function CheckoutForm({ onSubmit, hasItems = true }: CheckoutFormProps) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  function validateForm() {
    const newErrors: FormErrors = {}
    const cleanCep = cep.replace(/\D/g, '')

    if (nome.trim() === '') {
      newErrors.nome = 'Nome é obrigatório'
    }

    if (email.trim() === '') {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = 'E-mail inválido'
    }

    if (cep.trim() === '') {
      newErrors.cep = 'CEP é obrigatório'
    } else if (cleanCep.length < 8) {
      newErrors.cep = 'CEP deve ter 8 dígitos'
    }

    return newErrors
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (!hasItems) {
      return
    }

    const newErrors = validateForm()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      onSubmit({
        nome,
        email,
        cep,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: '1rem' }}>
      {!hasItems && (
        <span role="alert" style={{ color: '#b44343', fontSize: '0.95rem', fontWeight: 700 }}>
          Adicione pelo menos um produto ao carrinho para finalizar o pedido.
        </span>
      )}

      <div style={{ display: 'grid', gap: '0.45rem' }}>
        <label htmlFor="nome" style={{ fontWeight: 700 }}>
          Nome
        </label>
        <input
          id="nome"
          type="text"
          placeholder="Seu nome completo"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          style={{
            width: '100%',
            border: '1px solid #d8c8bb',
            borderRadius: '12px',
            padding: '0.9rem 1rem',
            backgroundColor: '#fff',
            color: '#2f241f',
          }}
        />
        {errors.nome && (
          <span role="alert" style={{ color: '#b44343', fontSize: '0.92rem' }}>
            {errors.nome}
          </span>
        )}
      </div>

      <div style={{ display: 'grid', gap: '0.45rem' }}>
        <label htmlFor="email" style={{ fontWeight: 700 }}>
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{
            width: '100%',
            border: '1px solid #d8c8bb',
            borderRadius: '12px',
            padding: '0.9rem 1rem',
            backgroundColor: '#fff',
            color: '#2f241f',
          }}
        />
        {errors.email && (
          <span role="alert" style={{ color: '#b44343', fontSize: '0.92rem' }}>
            {errors.email}
          </span>
        )}
      </div>

      <div style={{ display: 'grid', gap: '0.45rem' }}>
        <label htmlFor="cep" style={{ fontWeight: 700 }}>
          CEP
        </label>
        <input
          id="cep"
          type="text"
          placeholder="00000-000"
          value={cep}
          onChange={(event) => setCep(event.target.value)}
          style={{
            width: '100%',
            border: '1px solid #d8c8bb',
            borderRadius: '12px',
            padding: '0.9rem 1rem',
            backgroundColor: '#fff',
            color: '#2f241f',
          }}
        />
        {errors.cep && (
          <span role="alert" style={{ color: '#b44343', fontSize: '0.92rem' }}>
            {errors.cep}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={!hasItems}
        style={{
          border: 'none',
          borderRadius: '12px',
          padding: '0.95rem 1rem',
          backgroundColor: hasItems ? '#b86b4b' : '#d8c8bb',
          color: '#fff',
          fontWeight: 700,
          cursor: hasItems ? 'pointer' : 'not-allowed',
          marginTop: '0.25rem',
        }}
      >
        Finalizar Compra
      </button>
    </form>
  )
}
