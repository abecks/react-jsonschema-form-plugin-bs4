import React from 'react'
import PropTypes from 'prop-types'

function BaseInput(props) {
	// Note: since React 15.2.0 we can't forward unknown element attributes, so we
	// exclude the "options" and "schema" ones here.
	if (!props.id) {
		console.log('No id for', props)
		throw new Error(`no id for props ${JSON.stringify(props)}`)
	}
	const {
		value,
		readonly,
		disabled,
		autofocus,
		id,
		type,
		onBlur,
		onFocus,
		options,
		...inputProps
	} = props

	inputProps.type = options.inputType || inputProps.type || 'text'
	const _onChange = ({ target: { value } }) => {
		return props.onChange(value === '' ? options.emptyValue : value)
	}

	const { rawErrors } = inputProps

	const classes = ['form-control']
	if (rawErrors && rawErrors.length > 0) {
		classes.push('is-invalid')
	}

	return (
		<input
			className={classes.join(' ')}
			readOnly={readonly}
			id={id}
			disabled={disabled}
			autoFocus={autofocus}
			value={value == null ? '' : value}
			type={type}
			// {...cleanProps}
			onChange={_onChange}
			onBlur={onBlur && (event => onBlur(inputProps.id, event.target.value))}
			onFocus={onFocus && (event => onFocus(inputProps.id, event.target.value))}
		/>
	)
}

BaseInput.defaultProps = {
	type: 'text',
	required: false,
	disabled: false,
	readonly: false,
	autofocus: false,
}

BaseInput.propTypes = {
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.any,
	options: PropTypes.shape({
		emptyValue: PropTypes.string,
		inputType: PropTypes.string,
	}).isRequired,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	readonly: PropTypes.bool,
	autofocus: PropTypes.bool,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
}

export default BaseInput
