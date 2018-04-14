import React from 'react'
import Form from 'react-jsonschema-form'
import PropTypes from 'prop-types'

import capitalize from 'voca/capitalize'
import FieldTemplate from './FieldTemplate'
import BaseInput from './widgets/BaseInput'
import CheckboxWidget from './widgets/CheckboxWidget'
import CheckboxesWidget from './widgets/CheckboxesWidget'
import RadioWidget from './widgets/RadioWidget'
import snakeCase from 'voca/snake_case'

// this should come from parent
// function transformErrors(errors) {
// 	return errors.map(error => {
// 		if (error.name === 'required') {
// 			error.message = `${capitalize(error.params.missingProperty)} is required`
// 		}
// 		return error
// 	})
// }

const widgets = {
	BaseInput,
	CheckboxWidget,
	CheckboxesWidget,
	RadioWidget,
}

const FormWrapper = function(props) {
	const idPrefix = snakeCase(props.schema.title)

	const newProps = {
		...props,
		...{
			// noHtml5Validate: true,
			// showErrorList: false,
			// transformErrors,
			FieldTemplate,
			widgets,
			idPrefix,
		},
	}

	return <Form {...newProps} />
}
FormWrapper.propTypes = {
	schema: PropTypes.object.isRequired,
}

export default FormWrapper
