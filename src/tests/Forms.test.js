import StudentQuery from '../components/student/studentQuery';
import React from 'react';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

// In this file we're doing an integration test. Thus we need to hook up our
// form component to Redux and Redux-Form. To do that, we need to create the
// simplest redux store possible that will work with Redux-Form.
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

describe("Book Query Form", () => {
    Enzyme.configure({ adapter: new Adapter() })
	let store
	let onSave
	let subject
	beforeEach(() => {
		store = createStore(combineReducers({ form: formReducer }))
		onSave = sinon.stub().returns(Promise.resolve())
		const props = {
			onSave,
		}
		// With redux-form v5, we could do <ContactFormContainer store={store}/>.
		// However, with redux-form v6, the Field component we use is itself
		// connected to the redux store. Therefore, we must put the store into
		// context. To do that, we use <Provider/>.
		subject = mount(
			<Provider store={store}>
				<StudentQuery {...props}/>
			</Provider>
		)
	})
	it("shows help text when isbn is set to blank", () => {
		const input = subject.find('input').first()
		// Our form component only shows error messages (help text) if the
		// field has been touched. To mimic touching the field, we simulate a
		// blur event, which means the input's onBlur method will run, which
		// will call the onBlur method supplied by Redux-Form.
		input.simulate('blur')
		const isbnHintText = subject.find('.hintText')
		// Ensure only one node is returned, otherwise our call to text() below will yell at us.
		// expect(isbnHintText).to.have.length.of(1)
		expect(isbnHintText.text()).to.equal('Required')
	})

	// it("calls onSave", () => {
	// 	const form = subject.find('form')
	// 	const input = subject.find('input').first()
	// 	// Our form, when connected to Redux-Form, won't submit unless it's
	// 	// valid. Thus, we type a first name here to make the form's inputs,
	// 	// and thus the form, valid.
	// 	input.simulate('change', { target: { value: '1234567890' } })
	// 	form.simulate('submit')
	// 	expect(onSave.callCount).to.equal(1)
	// })
})