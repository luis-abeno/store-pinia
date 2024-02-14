import type { Product } from '@/models/product'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    productsList: [],
    product: null as Product | null,
    loading: false,
    error: null as string | null
  }),
  getters: {},
  actions: {
    async fetchProducts(): Promise<void> {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Error fetching products')
        }
        const data = await response.json()
        this.productsList = data
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An error occurred'
      } finally {
        this.loading = false
      }
    },
    async getById(id: number) {
      this.loading = true
      this.error = null
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!response.ok) {
          throw new Error('Error fetching product by id')
        }
        const data = await response.json()
        this.product = data
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An error occurred'
      } finally {
        this.loading = false
      }
    }
  }
})
