import { shallowMount } from '@vue/test-utils'
import Indesition from '@/components/Indesition'

describe('Counter.vue', () => {
  let wrapper
  let clgSpy
  global.fetch = jest.fn()

  beforeEach(() => {
    wrapper = shallowMount(Indesition)
    clgSpy = jest.spyOn(console, 'log')
    jest.clearAllMocks()
  })

  test('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should not do anything on input keypress', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    const input = wrapper.find('input')
    await input.setValue('Hello World')

    expect(clgSpy).toHaveBeenCalledTimes(1)
    expect(getAnswerSpy).not.toHaveBeenCalled()
  })

  test('should getAnswer on question mark (?) keypress', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    const input = wrapper.find('input')
    await input.setValue('Will I be good at Vue?')

    expect(clgSpy).toHaveBeenCalledTimes(1)
    expect(getAnswerSpy).toHaveBeenCalled()
  })


  test('should getAnswer', () => {

  })

  test('should fail on getAnswer', () => {

  })
})