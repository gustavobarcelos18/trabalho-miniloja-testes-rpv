import { Product, CartItem } from '../types'

export const products: Product[] = [
  {
    id: 1,
    name: 'Camiseta Básica',
    price: 49.9,
    category: 'Vestuário',
    image: '/images/camiseta.jpg',
    inStock: true,
    description: 'Camiseta de algodão 100%',
  },
  {
    id: 2,
    name: 'Tênis Esportivo',
    price: 199.9,
    category: 'Calçados',
    image: '/images/tenis.jpg',
    inStock: true,
    description: 'Tênis para corrida',
  },
  {
    id: 3,
    name: 'Boné Snapback',
    price: 79.9,
    category: 'Acessórios',
    image: '/images/bone.jpg',
    inStock: false,
    description: 'Boné com aba reta',
  },
]

export const mockProduct: Product = {
  id: products[0].id,
  name: products[0].name,
  price: products[0].price,
  category: products[0].category,
  image: products[0].image,
  inStock: products[0].inStock,
  description: products[0].description,
}

export const mockOutOfStockProduct: Product = {
  id: products[2].id,
  name: products[2].name,
  price: products[2].price,
  category: products[2].category,
  image: products[2].image,
  inStock: products[2].inStock,
  description: products[2].description,
}

export const mockCartItems: CartItem[] = [
  {
    product: {
      id: products[0].id,
      name: products[0].name,
      price: products[0].price,
      category: products[0].category,
      image: products[0].image,
      inStock: products[0].inStock,
      description: products[0].description,
    },
    quantity: 2,
  },
  {
    product: {
      id: products[1].id,
      name: products[1].name,
      price: products[1].price,
      category: products[1].category,
      image: products[1].image,
      inStock: products[1].inStock,
      description: products[1].description,
    },
    quantity: 1,
  },
]
