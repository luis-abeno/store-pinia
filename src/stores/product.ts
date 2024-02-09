import type { Product } from '@/models/product'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    productsList: [],
    product: null as Product | null
  }),
  getters: {},
  actions: {
    async fetchProducts(): Promise<void> {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        this.productsList = data
      } catch (error) {
        console.error('Error fetching products', error)
      }
    },
    async getById(id: number) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        this.product = data
      } catch (error) {
        console.error('Error fetching product by id', error)
      }
    }
  }
})
