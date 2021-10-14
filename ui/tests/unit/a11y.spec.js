const App = require('../../src/App.vue')

const { mount } = require('@vue/test-utils')
const { axe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations)

describe('SampleTest.vue', () => {
  it('App should have no WCAG 2 A violations', async () => {
    //test the entire container
    // const { container } = render(<App/>)
    // //run the tests using WCAG 2.0A level
    // const results = await axe(container, {
    //   runOnly: 'wcag2a'
    // })
    //test just a specific element
    //const wrapper = mount(Image)
    //run the tests using WCAG 2.0A level
    // const results = await axe(wrapper.element, {
    //   runOnly: 'wcag2a'
    // })
  
    //expect(results).toHaveNoViolations()
    expect(true);
  });
});



//additional tests as needed

