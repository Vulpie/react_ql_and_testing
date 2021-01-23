import React from 'react'
import { shallow } from 'enzyme'
import HomeButton from '../../../Components/Partials/HomeButton'

// use shallow for simple components without props

test('should render HomeButton correctly', () => {
	const wrapper = shallow(<HomeButton />)
	expect(wrapper.find('.home-button').length).toBe(1) // find zwraca tablice elementów tak jak querySelectorAll

	expect(wrapper).toMatchSnapshot()

	// const renderer = new ReactShallowRenderer()
	// renderer.render(<HomeButton />)
	// expect(renderer.getRenderOutput()).toMatchSnapshot() // the first time it is going to pass because there is no snapshot
	// console.log(renderer.getRenderOutput())
})
