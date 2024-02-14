import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppFooterVue from './AppFooter.vue'

describe('App Footer', () => {
  // Check if it's rendering the current year
  it('should render the current year', () => {
    const wrapper = shallowMount(AppFooterVue)
    const currentYear = new Date().getFullYear()
    expect(wrapper.find('span').text()).toBe(String(currentYear))
  })
})
