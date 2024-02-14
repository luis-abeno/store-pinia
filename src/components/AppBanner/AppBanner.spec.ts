import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppBanner from './AppBanner.vue'

describe('App Banner', () => {
  // Check if the component has the text "Welcome to the app" in a H1 tag
  it('should render a welcome message', () => {
    const wrapper = shallowMount(AppBanner)
    expect(wrapper.find('h1').text()).toBe('Welcome to the app')
  })
})
