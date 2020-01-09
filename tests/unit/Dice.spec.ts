import { shallowMount } from '@vue/test-utils'
import Dice from '@/components/Dice.vue'

describe('Dice.vue', () => {
  it('Returns true when valid dice number is passed', () => {
    const current = 1
    const wrapper = shallowMount(Dice, {
      propsData: { current }
    })
    expect(wrapper.text()).toMatch(current.toString())
  })

  it('Returns error message when 0 dice number is passed', () => {
    const current = 0
    const wrapper = shallowMount(Dice, {
      propsData: { current }
    })
    expect(wrapper.text()).toBe('INVALID FACE NUMBER')
  })

  it('Returns error message when 7 dice number is passed', () => {
    const current = 7
    const wrapper = shallowMount(Dice, {
      propsData: { current }
    })
    expect(wrapper.text()).toBe('INVALID FACE NUMBER')
  })

  it('Returns error message when 7 dice number is passed', () => {
    const current = undefined
    const wrapper = shallowMount(Dice, {
      propsData: { current }
    })
    expect(wrapper.text()).toBe('INVALID FACE NUMBER')
  })
})
