import { shallowMount } from '@vue/test-utils'
import Indesition from '@/components/Indesition'

describe('Counter.vue', () => {
  let wrapper
  let clgSpy
  const apiImageUrl = 'https://yesno.wtf/assets/yes/2.gif'
  const apiAnswer = 'yes'

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      answer: apiAnswer,
      forced: false,
      image: apiImageUrl
    })
  }))

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

  test('should getAnswer', async () => {
    await wrapper.vm.getAnswer()

    const image = wrapper.find('img')
    const h1 = wrapper.find('h1')

    expect(h1.exists()).toBeTruthy()
    expect(image.exists()).toBeTruthy()
    expect(wrapper.vm.answer).toBe(apiAnswer)
    expect(wrapper.vm.image).toBe(apiImageUrl)
  })

  test('should fail on getAnswer', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'))

    await wrapper.vm.getAnswer()

    const image = wrapper.find('img')
    const h1 = wrapper.find('h1')

    console.log(wrapper.vm.answer)

    expect(h1.exists()).toBeFalsy()
    expect(image.exists()).toBeFalsy()
    expect(wrapper.vm.answer).toBe('Error al conectar al API')
    expect(wrapper.vm.image).toBe(null)
  })
})