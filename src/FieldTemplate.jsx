import React from 'react'
import PropTypes from 'prop-types'
import Label from './Label'
import ErrorList from './ErrorList'
import Help from './Help'
import titleCase from 'voca/title_case'

function FieldTemplate(props) {
	const {
		id,
		label,
		rawDescription,
		hidden,
		required,
		displayLabel,
		children,
		rawHelp,
		rawErrors,
		schema,
	} = props

	if (hidden) {
		return props.children
	}

	let newLabel = titleCase(label)

	if (required) {
		newLabel += '*'
	}

	var childrenWithLabels = React.Children.map(children, child =>
		React.cloneElement(child, { label: newLabel })
	)

	const classes = ['form-group']
	if (rawErrors && rawErrors.length > 0) {
		classes.push('is-invalid')
	}

	return (
		<div className={classes.join(' ')}>
			{displayLabel && <Label label={newLabel} id={id} errors={rawErrors} />}
			{childrenWithLabels}
			<Help
				rawHelp={rawHelp}
				errors={rawErrors}
				rawDescription={rawDescription}
				schema={schema}
			/>
			<ErrorList errors={rawErrors} />
		</div>
	)
}
FieldTemplate.propTypes = {
	id: PropTypes.string,
	classNames: PropTypes.string,
	schema: PropTypes.object.isRequired,
	label: PropTypes.string,
	children: PropTypes.node.isRequired,
	errors: PropTypes.element,
	rawErrors: PropTypes.arrayOf(PropTypes.string),
	help: PropTypes.element,
	rawHelp: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	description: PropTypes.element,
	rawDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	hidden: PropTypes.bool,
	required: PropTypes.bool,
	readonly: PropTypes.bool,
	displayLabel: PropTypes.bool,
	fields: PropTypes.object,
	formContext: PropTypes.object,
}

export default FieldTemplate
