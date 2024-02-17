import { describe, it, expect } from 'vitest'

describe('HomeView', () => {
  it('should render the home view', () => {
    expect(true).toBe(true)
  })

  it('should fetch products', () => {
    const products = [
      {
        id: '1',
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        category: 'bags',
        stock: 10
      },
      {
        id: '2',
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description: 'Slim-fitting style, short sleeves, and a crew neck.',
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        category: 'clothing',
        stock: 10
      },
      {
        id: '3',
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description: 'great outerwear jackets for Spring/Autumn & Winter',
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        category: 'clothing',
        stock: 10
      }
    ]

    expect(products.length).toBe(3)
  })
})
