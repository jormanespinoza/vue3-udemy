import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Counter)
  })

  test('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('h2 should match default value "Counter"', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy()

    const h2Value = wrapper.find('h2').text()

    expect(h2Value).toBe("Counter")
  })

  test('p tag value should match default value "25"', () => {
    const spanValue = wrapper.find('[data-counter="counter"]').text()

    expect(spanValue).toBe('25')
  })

  test('should increment counter in 1', async () => {
    const [, increaseCounterBtn] = wrapper.findAll('button')

    await increaseCounterBtn.trigger('click')

    const spanValue = wrapper.find('[data-counter="counter"]').text()

    expect(spanValue).toBe('26')
  })

  test('should decrement counter in 1', async () => {
    const [decreaseCounterBtn] = wrapper.findAll('button')

    await decreaseCounterBtn.trigger('click')

    const spanValue = wrapper.find('[data-counter="counter"]').text()

    expect(spanValue).toBe('24')
  })

  test('sup tag value should match default value "2"', () => {
    const powerValue = wrapper.find('sup').text()

    expect(powerValue).toBe('2')
  })

  test('should increment power in 1', async () => {
    const [, , , increasePowerBtn] = wrapper.findAll('button')

    await increasePowerBtn.trigger('click')

    const powerValue = wrapper.find('sup').text()

    expect(powerValue).toBe('3')
  })

  test('should decrement power in 1', async () => {
    const [, , decreasePowerBtn] = wrapper.findAll('button')

    await decreasePowerBtn.trigger('click')

    const powerValue = wrapper.find('sup').text()

    expect(powerValue).toBe('1')
  })

  test('should stablish counter default start value', () => {
    const { start } = wrapper.props()

    const counterValue = wrapper.find('[data-counter="counter"]').text()

    expect(Number(counterValue)).toBe(start)
  })
})